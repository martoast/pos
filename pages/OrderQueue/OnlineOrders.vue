
<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
        :search="search"
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="secondary"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                label="Sort by"
              ></v-select>

            </template>
          </v-toolbar>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
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
                <v-card-title class="subheading font-weight-bold">Total: ${{ item.OrderTotal }}</v-card-title>
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
              @click="dialog = false"
            >
              Send to Kitchen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>

</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      itemsPerPageOptions: [4, 8, 12],
      dialog: false,
      search: "",
      filter: {},

      page: 1,
      itemsPerPage: 4,
      keys: ["Cash", "Card"],
      sortBy: "name",

      items: []
    };
  },
  created() {
    const vm = this;

    vm.$fireAuth.onAuthStateChanged(async function(user) {
      if (user) {
        try {
          const messageRef = vm.$fireStore.collection("users").doc(user.email);

          await messageRef
            .get()
            .then(function(doc) {
              if (doc.exists) {
                console.log(doc.data().orders);
                vm.items = doc.data().orders;
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            })
            .catch(function(error) {
              console.log("Error getting document:", error);
            });
        } catch (e) {
          alert(e);
          return;
        }
        vm.$store.commit("ShoppingCart/ClearCart");
      } else {
        // No user is signed in.
        console.log("No User logged in");
      }
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
      console.log(item);
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