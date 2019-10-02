
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
              v-for="item in props.items"
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

                <v-list dense>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                    :color="sortBy === key ? `blue lighten-4` : `white`"
                  >
                    <v-list-item-content>{{ key }}:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item[key.toLowerCase()] }}</v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-card-title class="subheading font-weight-bold">Total: ${{ item.total }}</v-card-title>
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
      dialog: false,
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Pizza", "Soda", "Salad", "Name", "Tax", "ID"],
      items: [
        {
          name: "Torta",
          id: "234556",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        },
        {
          name: "Ice cream sandwich",
          id: "1234",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        },
        {
          name: "Eclair",
          id: "1422",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        },
        {
          name: "Frozen Yogurt",
          id: "6542",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        },
        {
          name: "Taco",
          id: "7163",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        },
        {
          name: "Burger",
          id: "1745",
          total: "23.95",
          pizza: "12.99",
          soda: "3.95",
          salad: "7.95",

          tax: "7%",
          order: [
            {
              item: "Salad",
              price: "7.95"
            },
            {
              item: "Pasta",
              price: "12.99"
            },
            {
              item: "soda",
              price: "3.99"
            }
          ]
        }
      ]
    };
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