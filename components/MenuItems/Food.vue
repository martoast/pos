<template>
  <div>
    <section class="section has-text-centered">
      <SearchBar />
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

        <div>
          <v-row
            align="center"
            justify="center"
          >
            <v-dialog
              v-model="dialog"
              persistent
              max-width="1000px"
            >
              <v-card color="basil">
                <v-card-title>
                  <span class="headline">{{FoodItem}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
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
                        <v-select
                          :items="['Small', 'Medium', 'Large']"
                          label="Size*"
                          required
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-container fluid>
                      <p>{{ selected }}</p>
                      <v-checkbox
                        v-for="modifier in this.FoodModifiers"
                        :key="modifier.name"
                        v-model="selected"
                      >{{modifier.name}}</v-checkbox>

                    </v-container>
                    <v-item-group>
                      <v-container>
                        <v-row>
                          <v-col
                            v-for="modifier in this.FoodModifiers"
                            :key="modifier.name"
                            cols="12"
                            md="4"
                          >
                            <v-item v-slot:default="{ active, toggle }">
                              <v-card
                                :color="active ? 'secondary' : ''"
                                class="rounded-card"
                                dark
                                height="200"
                                @click="handleModifiers(modifier)"
                              >
                                <v-list-item-title class="headline mb-1">{{modifier.name}}</v-list-item-title>
                                <v-scroll-y-transition>
                                  <div
                                    v-if="active"
                                    class="display-3 flex-grow-1 text-center"
                                  >
                                    Active
                                  </div>
                                </v-scroll-y-transition>
                              </v-card>
                            </v-item>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-item-group>
                    <ItemAddOn FoodModifiers />
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
            </v-dialog>
          </v-row>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SearchBar from "~/components/SearchBar.vue";
import ItemAddOn from "~/components/ItemAddOn.vue";
export default {
  components: {
    SearchBar,
    ItemAddOn
  },
  data() {
    return {
      MenuItems: this.$store.state.MenuItems.Food,
      FoodItem: null,
      FoodModifiers: null,
      selected: ["John"],
      dialog: false,
      text: "center",
      model: null,
      tab: null,
      items: ["Modifiers", "Extras", "Notes"],
      window: {
        width: 0,
        height: 0
      }
    };
  },

  computed: {
    ModifierTotal() {}
  },

  methods: {
    AddtoCart(item) {
      // console.log("Adding " + item.name + " to cart..");
      this.FoodModifiers = item.modifier;
      // console.log("Available Modifiers");
      // console.log(this.FoodModifiers);
      this.$nuxt.$emit("test", {
        name: item.name,
        price: item.price,
        id: item.id
      });
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    handleModifiers(modifier) {
      this.$nuxt.$emit("test2", modifier);
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
html,
body,
#app,
section.section {
  height: 100%;
  width: 80%;
}

section.section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>