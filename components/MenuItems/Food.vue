<template>
  <div>
    <div>
      <v-item-group multiple>
        <v-container>
          <v-row>
            <v-col
              v-for="item in MenuItems"
              :key="item.id"
              cols="12"
              md="4"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : ''"
                  light
                  height="150"
                  @click="AddtoCart(item)"
                  @click.stop="dialog = true"
                  class="rounded-card"
                >
                  <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.price}}</v-list-item-subtitle>

                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-1 flex-grow-1 text-center"
                    >Item Selected</div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    <div>
      <v-row
        align="center"
        justify="center"
      >
        <v-dialog
          v-model="dialog"
          persistent
          max-width="800px"
        >
          <v-card color="basil">

            <v-tabs
              v-model="tab"
              background-color="indigo"
              grow
            >
              <v-tab
                v-for="item in items"
                :key="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add Item Modifiers</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row
                        align="center"
                        justify="center"
                      >
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-select
                            :items="['Small', 'Medium', 'Large']"
                            label="Size*"
                            required
                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-autocomplete
                            :items="['No meat', 'No Onion', 'No tomatoes', 'No Mustard', 'No Pickles']"
                            label="autocomplete"
                            multiple
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Close</v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add Item Modifiers</span>
                  </v-card-title>

                  <v-item-group multiple>
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="item in MenuItems"
                          :key="item.id"
                          cols="12"
                          md="4"
                        >
                          <v-item v-slot:default="{ active, toggle }">
                            <v-card
                              :color="active ? 'primary' : ''"
                              light
                              height="150"
                              class="rounded-card"
                            >
                              <v-list-item-title class="headline mb-1">{{item.modifier.name}}</v-list-item-title>
                              <v-list-item-subtitle>{{item.modifier.price}}</v-list-item-subtitle>

                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Close</v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card>
                  <v-card-title>
                    <span class="headline">Notes for Kitchen</span>
                  </v-card-title>
                  <v-container fluid>
                    <v-row
                      align="center"
                      justify="center"
                    >

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          solo
                          name="input-7-4"
                          label="Enter a Note"
                        ></v-textarea>
                      </v-col>

                    </v-row>
                  </v-container>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Close</v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MenuItems: [
        {
          name: "Pizza",
          price: 7.99,
          id: 1,
          modifier: [
            {
              name: "Extra Peperoni",
              price: "2.99"
            }
          ]
        },
        {
          name: "Burger",
          price: 15.95,
          id: 2,
          modifier: [
            {
              name: "Extra Bacon",
              price: "3.99"
            }
          ]
        },
        {
          name: "HotDog",
          price: 5.95,
          id: 3,
          modifier: [
            {
              name: "Extra Veggies",
              price: "2.99"
            }
          ]
        },
        {
          name: "Taco",
          price: 2.99,
          id: 4,
          modifier: [
            {
              name: "Extra Meat",
              price: "2.99"
            }
          ]
        },
        {
          name: "Carne - asada",
          price: 22.99,
          id: 5,
          modifier: [
            {
              name: "Extra Sauce",
              price: "2.99"
            }
          ]
        },
        {
          name: "Salad",
          price: 9.99,
          id: 6,
          modifier: [
            {
              name: "Extra Sauce",
              price: "2.99"
            }
          ]
        },
        {
          name: "Poke",
          price: 13.99,
          id: 7,
          modifier: [
            {
              name: "Extra Scoop",
              price: "4.99"
            }
          ]
        },
        {
          name: "Greek Yogurt",
          price: 7.99,
          id: 8,
          modifier: [
            {
              name: "Extra Granola",
              price: "2.99"
            }
          ]
        }
      ],
      dialog: false,
      text: "center",
      model: null,
      tab: null,
      items: ["Modifiers", "Extras", "Notes"],
      text: "hey"
    };
  },

  methods: {
    AddtoCart(item) {
      console.log(item.name);
      // this.message = Date();
      // console.log(this.message);

      this.$nuxt.$emit("test", {
        name: item.name,
        price: item.price
      });
    }
  }
};
</script>
<style scoped>
.rounded-card {
  border-radius: 50px;
  text-align: center;
}
</style>