<template>
  <div>
    <section class="section has-text-centered">
      <!-- <SearchBar /> -->
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
              <v-card class="primary">
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

                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <div>
                  <div>
                    <v-item-group multiple>
                      <v-container>
                        <v-row>
                          <v-col
                            v-for="Modifier in FoodModifiers"
                            :key="Modifier.name"
                            cols="12"
                            md="4"
                          >
                            <v-item v-slot:default="{ active, toggle }">
                              <v-card
                                :color="active ? 'secondary' : ''"
                                class="rounded-card"
                                dark
                                height="200"
                                @click="AddModifierToList(Modifier)"
                              >
                                <v-list-item-title class="headline mb-1">{{Modifier.name}}</v-list-item-title>
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
                  </div>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="SendModifiers()"
                    >Close</v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="SendModifiers()"
                    >Save</v-btn>
                  </v-card-actions>
                </div>

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

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      MenuItems: this.$store.state.MenuItems.Food,
      FoodItem: null,
      SelectedModifiers: [],
      FoodModifiers: null,
      ModifierList: [],
      Total: null,
      Cart: null,
      selected: ["John"],
      dialog: false,
      text: "center",
      model: null,
      tab: null,
      items: ["FoodModifiers", "Extras", "Notes"],
      window: {
        width: 0,
        height: 0
      }
    };
  },

  methods: {
    AddtoCart(item) {
      this.FoodModifiers = item.modifier;
      // console.log(this.FoodModifiers);
      this.FoodItem = item;

      //SET STATE WITH CART OBJECT
    },
    AddModifierToList(Modifier) {
      this.ModifierList.push(Modifier);
      // console.log(Modifier.name);
      // console.log("Adding Modifier to ModifierList");
      // console.log(this.ModifierList[0]);
    },
    SendModifiers() {
      this.Cart = {
        name: this.FoodItem.name,
        price: this.FoodItem.price,
        id: this.FoodItem.id,
        FoodModifiers: this.ModifierList[0]
      };

      this.$nuxt.$emit("test", this.Cart);
      this.dialog = false;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
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