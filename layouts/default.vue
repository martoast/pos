<template>
  <div>
    <div>
      <v-app light>
        <v-container class="light">
          <v-app-bar
            :clipped-left="clipped"
            class="secondary"
            fixed
            app
          >
            <v-btn
              icon
              @click.stop="leftDrawer = !leftDrawer"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-app-bar>// Main Navigation card
          <v-navigation-drawer
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            v-model="leftDrawer"
            :left="left"
            temporary
            fixed
            app
          >
            <v-list>
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <v-list-item-title class="title">Alex POS</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item
                v-for="option in options"
                :key="option.title"
                link
                :to="option.to"
                router
                exact
              >
                <v-list-item-icon>
                  <v-icon>{{ option.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ option.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <template v-slot:append>
              <div class="pa-2">
                <v-btn block>Logout</v-btn>
              </div>
            </template>
          </v-navigation-drawer>// Menu Navigation card shit
          <v-navigation-drawer
            class="light"
            v-model="drawer"
            :clipped="clipped"
            fixed
            app
          >
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-navigation-drawer
            class="light"
            width="445"
            absolute
            permanent
            right
            app
          >
            <v-card
              width="450"
              max-height="1000"
              class="mx-auto"
              :elevation="5"
            >
              <v-simple-table>
                <template v-slot:default>
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
                    <tr v-if="items.length">
                      <td>tax: 13%</td>
                    </tr>
                  </tbody>
                  <tr>
                    <v-divider></v-divider>
                  </tr>

                  <tfoot>
                    <tr>
                      <h4 v-if="items.length">Total: $ {{CartTotal}}</h4>
                    </tr>
                  </tfoot>
                </template>
              </v-simple-table>
            </v-card>
            <template v-slot:append>
              <div class="pa-2">
                <v-btn
                  block
                  color="success"
                  @click.stop="dialog = true"
                >CheckOut</v-btn>
              </div>
            </template>
          </v-navigation-drawer>

          <nuxt />
        </v-container>

        <v-footer
          :fixed="fixed"
          app
        >
          <span>&copy; Alex Martos</span>
        </v-footer>
      </v-app>
    </div>
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-navigation-drawer
            class="light"
            width="445"
            absolute
            permanent
            right
            app
          >
            <v-card
              width="450"
              max-height="1000"
              class="mx-auto"
              :elevation="5"
            >
              <v-simple-table>
                <template v-slot:default>
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
                    <tr v-if="items.length">
                      <td>tax: 13%</td>
                    </tr>
                  </tbody>
                  <tr>
                    <v-divider></v-divider>
                  </tr>

                  <tfoot>
                    <tr></tr>
                  </tfoot>
                </template>
              </v-simple-table>
            </v-card>
            <template v-slot:append>
              <h1
                v-if="items.length"
                class="center"
              >Total: $ {{CartTotal}}</h1>
            </template>
          </v-navigation-drawer>
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
      clipped: true,
      Maindrawer: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-food",
          title: "Food",
          to: "/"
        },
        {
          icon: "mdi-beer",
          title: "Drinks",
          to: "/drinksmenu"
        },
        {
          icon: "mdi-food",
          title: "Desserts",
          to: "/DessertsMenu"
        }
      ],
      options: this.$store.state.NavOptions.options,
      left: true,

      leftDrawer: false,
      title: this.$route.path,

      total: null,
      MenuItems: [],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      tab: null,
      PaidAmount: null,

      calculator: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      // console.log(data + " emitted");
      // this.total = data;
      this.MenuItems.push(data);
      console.log(this.MenuItems);
    });
  },
  methods: {
    DeleteItem(item) {
      this.MenuItems.splice(item, 1);
    },
    test() {
      console.log(this.PaidAmount);
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
<style scoped>
.checkout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.center {
  justify-content: center;
  text-align: center;
  font-size: 2.5em;
}
.display {
  color: #a3a3a3;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: clip;
  margin-left: 20px;
}
</style>