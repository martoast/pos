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
                  height="150"
                  @click="AddtoCart(item)"
                  @click.stop="dialog = true"
                  class="rounded-card"
                >
                  <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                  <!-- <v-list-item-subtitle>{{item.price}}</v-list-item-subtitle> -->
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
              >{{ item }}</v-tab>
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
                          v-for="n in 9"
                          :key="n"
                          cols="12"
                          md="4"
                        >
                          <v-item
                            outlined
                            color="success"
                          >
                            <v-card
                              class="d-flex align-center"
                              light
                              height="150"
                            >
                              <v-list-item-title class="center">{{n}}</v-list-item-title>
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
      MenuItems: this.$store.state.MenuItems.Food,
      dialog: false,
      text: "center",
      model: null,
      tab: null,
      items: ["Modifiers", "Extras", "Notes"],

      Food: ["pizza"]
    };
  },
  created() {
    this.$nuxt.$emit("ItemName", this.Food);
  },
  computed: {},

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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>