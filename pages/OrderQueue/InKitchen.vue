<template>
  <div>

    <v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >

        <template v-slot:default="props">
          <v-row class="ma-10 pa-10">
            <v-col
              v-for="item in items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                @click="motal(item)"
                @click.stop="dialog = true"
              >
                <v-card-title class="subheading font-weight-bold">Order ID: #{{ item.id }}</v-card-title>

                <v-divider></v-divider>

                <!-- <v-list dense>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                    :color="sortBy === key ? `blue lighten-4` : `white`"
                  >
                    <v-list-item-content>{{ key }}:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item[key.toLowerCase()] }}</v-list-item-content>
                  </v-list-item>
                </v-list> -->
                <v-simple-table>

                  <tbody>
                    <tr>
                      <td>
                        {{item.name}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {{item.size}}
                      </td>
                    </tr>
                    <tr
                      v-for="Modifier in item.FoodModifiers"
                      v-bind:key="Modifier.id"
                    >
                      <td>
                        {{Modifier.name}}
                      </td>
                    </tr>
                  </tbody>

                </v-simple-table>
                <v-divider></v-divider>
                <v-card-title class="subheading font-weight-bold">Notes: {{ item.Notes }}</v-card-title>

              </v-card>
            </v-col>
          </v-row>

        </template>

      </v-data-iterator>
    </v-container>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Order Completed?</v-card-title>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn
              color="green darken-1"
              text
              @click="OrderReady()"
              to="/OrderQueue/InKitchen"
            >
              Order Ready
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  layout: "OrderQueue",
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      dialog: false,
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Pizza", "Soda", "Salad", "Name", "Tax", "ID"],
      items: [],
      order: null
    };
  },
  created() {
    let ordersRef = this.$fireStore.collection("orders");
    let allOrders = ordersRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.items.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    motal(item) {
      // console.log(item.id);
      this.order = item;
    },
    OrderReady() {
      console.log(this.order.id);
      const messageRef = this.$fireStore
        .collection("ready-to-go")
        .doc(this.order.id);
      messageRef.set(this.order);
      const orderRef = this.$fireStore.collection("orders").doc(this.order.id);
      orderRef.delete();
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.paddingTop {
  padding: 40px;

  justify-content: center;
}
</style>