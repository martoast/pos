<template>
  <div>
    <v-card
      width="450"
      height="500"
      :elevation="5"
      style="margin-top: 500px;"
    >
      <v-card
        width="450"
        :elevation="5"
        style="margin-top: 300px;"
      >
        <v-card-title class="blue white--text">
          <span class="headline">
            {{OrderType}}
            <v-icon large>{{icon}}</v-icon>
          </span>

          <div class="flex-grow-1"></div>

          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(option, i) in options"
                :key="i"
                @click="selected(option)"
              >
                <v-list-item-title>{{option.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>

        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in MenuItems"
              :key="item.name"
            >
              <td @click="DeleteItem(item)">{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
            <tr>

            </tr>
          </tbody>

          <tfoot>
            <tr>
              <h4>Total: $ {{CartTotal}}</h4>
            </tr>
          </tfoot>
        </v-simple-table>
      </v-card>

      <div class="pa-2">
        <v-btn
          block
          color="success"
          @click.stop="dialog = true"
        >CheckOut</v-btn>
      </div>
    </v-card>
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-card flat>
              <v-toolbar
                color="secondary"
                dark
                extended
                flat
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>CheckOut</v-toolbar-title>
              </v-toolbar>
              <v-row>
                <v-card
                  class="mx-auto"
                  max-width="800"
                  style="margin-top: -64px;"
                ></v-card>
              </v-row>

              <v-card
                class="mx-auto"
                max-width="800"
                style="margin-top: 64px;"
              >
                <v-tabs
                  fixed-tabs
                  background-color="indigo"
                  dark
                  height="64"
                  v-model="tab"
                >
                  <v-tab>Pay with Cash</v-tab>
                  <v-tab>Pay with Card</v-tab>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card elevation="12">
                        <h3 class="center">Choose Amount</h3>
                        <v-row class="center">
                          <v-btn
                            x-large
                            class="ma-2"
                            tile
                            outlined
                            color="success"
                            v-on:click="PaidAmount += 1"
                          >$1.00</v-btn>
                          <v-btn
                            x-large
                            class="ma-2"
                            tile
                            outlined
                            color="success"
                            v-on:click="PaidAmount += 5"
                          >$5.00</v-btn>
                          <v-btn
                            x-large
                            class="ma-2"
                            tile
                            outlined
                            color="success"
                            v-on:click="PaidAmount += 10"
                          >$10.00</v-btn>
                          <v-btn
                            x-large
                            class="ma-2"
                            tile
                            outlined
                            color="success"
                            v-on:click="PaidAmount += 20"
                          >$20.00</v-btn>
                          <v-btn
                            x-large
                            class="ma-2"
                            tile
                            outlined
                            color="success"
                            v-on:click="PaidAmount += CartTotal"
                          >Exact</v-btn>
                        </v-row>
                        <v-row class="center">
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <h1>{{PaidAmount}}</h1>
                            <h4>change due: {{ChangeDue}}</h4>
                            <v-row>
                              <v-text-field outlined></v-text-field>
                              <div class="text-center">
                                <v-btn
                                  class="display"
                                  @click="DeletePaidAmount"
                                >Delete</v-btn>
                              </div>
                            </v-row>
                          </v-col>
                        </v-row>
                        <div>
                          <v-card-actions>
                            <v-spacer />

                            <v-btn
                              x-large
                              right
                              color="success"
                              dark
                              @click="dialog = false"
                            >Pay Now</v-btn>
                          </v-card-actions>
                        </div>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card-text style="height: 50px;"></v-card-text>
                      <v-card>
                        <v-text-field label="Sign here*"></v-text-field>
                        <small>*indicates required field</small>
                        <div class="my-2">
                          <v-btn
                            x-large
                            color="error"
                            dark
                          >Clear Sinature</v-btn>
                          <v-btn
                            x-large
                            color="success"
                            dark
                            @click="dialog = false"
                          >Done Signing</v-btn>
                        </div>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-tabs>

                <v-divider></v-divider>
              </v-card>
            </v-card>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>


<script>
export default {
  data() {
    return {
      MenuItems: [],
      FoodModifiers: null,
      dialog: false,
      tab: null,
      PaidAmount: null,
      OrderType: "Dine-In",
      icon: "mdi-food-fork-drink",

      options: [
        { title: "Dine-In", icon: "mdi-food-fork-drink" },
        { title: "Take-Out", icon: "mdi-walk" },
        { title: "Delivery", icon: "mdi-bike" }
      ]
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      // console.log(data + " emitted");
      // this.total = data;
      this.MenuItems.push(data);
      console.log(this.MenuItems);
    });
    this.$nuxt.$on("test2", data => {
      this.FoodModifiers = data;
      console.log("GOT the GOODS: ");
      console.log(this.FoodModifiers);
    });
  },
  methods: {
    DeleteItem(item) {
      this.MenuItems.splice(item, 1);
    },
    selected(option) {
      console.log(option.title);
      this.OrderType = option.title;
      this.icon = option.icon;
    },
    DeletePaidAmount() {
      this.PaidAmount = null;
    }
  },
  computed: {
    CartTotal() {
      return this.MenuItems.reduce((acc, item) => acc + item.price, 0);
    },
    ChangeDue() {
      if (this.PaidAmount) {
        return (this.ChangeDue = this.CartTotal - this.PaidAmount);
      }
    }
  }
};
</script>