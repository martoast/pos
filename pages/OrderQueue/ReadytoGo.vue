
<template>
  <div>

    <v-tabs
      fixed-tabs
      class="pa-3"
      height="75"
      color="#e7f0ff"
    >

      <v-tab>
        <v-icon>mdi-home</v-icon>
        Dine In(8)
      </v-tab>
      <v-tab>
        <v-icon>mdi-medical-bag</v-icon>
        To Go(2)
      </v-tab>
      <v-tab>
        <v-icon>mdi-car</v-icon>
        Delivery(6)
      </v-tab>
      <v-tab>
        <v-icon>mdi-walk</v-icon>
        Pickup(4)
      </v-tab>

      <v-tab-item>
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

            <template>
              <v-row class="ma-10 pa-10">
                <v-col
                  v-for="item in this.items"
                  :key="item.name"
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

            <template v-slot:footer>
              <v-row
                class="mt-2"
                align="center"
                justify="center"
              >

                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      text
                      color="primary"
                      class="ml-2"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <div class="flex-grow-1"></div>

                <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>
      <v-tab-item>
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

            <template>
              <v-row class="ma-10 pa-10">
                <v-col
                  v-for="item in this.items"
                  :key="item.name"
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
            <template v-slot:footer>
              <v-row
                class="mt-2"
                align="center"
                justify="center"
              >

                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      text
                      color="primary"
                      class="ml-2"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <div class="flex-grow-1"></div>

                <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>
      <v-tab-item>
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

            <template>
              <v-row class="ma-10 pa-10">
                <v-col
                  v-for="item in this.items"
                  :key="item.name"
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

            <template v-slot:footer>
              <v-row
                class="mt-2"
                align="center"
                justify="center"
              >

                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      text
                      color="primary"
                      class="ml-2"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <div class="flex-grow-1"></div>

                <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>
      <v-tab-item>
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

            <template>
              <v-row class="ma-10 pa-10">
                <v-col
                  v-for="item in this.items"
                  :key="item.name"
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

            <template v-slot:footer>
              <v-row
                class="mt-2"
                align="center"
                justify="center"
              >

                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      text
                      color="primary"
                      class="ml-2"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <div class="flex-grow-1"></div>

                <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>

    </v-tabs>

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
              All Done
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
      tab: "",
      dialog: false,
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Pizza", "Soda", "Salad", "Name", "Tax", "ID"],
      items: []
    };
  },
  created() {
    let ordersRef = this.$fireStore.collection("ready-to-go");
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
      console.log(item);
    }
  }
};
</script>