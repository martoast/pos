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
              max-width="400px"
            >
              <v-card class="primary">
                <v-card-title>
                  <span class="headline">{{this.FoodItemName}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>

                      <v-select
                        :items="this.ItemSizes"
                        label="Size*"
                        required
                        v-model="selectedSize"
                      ></v-select>
                      <div>
                        <v-container
                          v-for="Modifier in FoodModifiers"
                          :key="Modifier.name"
                        >

                          <v-checkbox
                            v-model="ModifierList"
                            :label=Modifier.name
                            :value=Modifier
                          ></v-checkbox>
                        </v-container>
                      </div>

                      <v-textarea
                        filled
                        auto-grow
                        label="Notes for Kitchen"
                        rows="4"
                        row-height="30"
                        shaped
                        v-model="KitchenNotes"
                      ></v-textarea>

                    </v-row>

                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <div>

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
import { mapState } from "vuex";

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      MenuItems: null,
      FoodItem: null,
      FoodItemName: null,
      SelectedModifiers: [],
      FoodModifiers: null,
      ModifierList: [],
      KitchenNotes: "",
      selectedSize: null,
      ItemSizes: null,

      Cart: null,

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
  created() {
    fetch("http://localhost:3002/food")
      .then(response => response.json())
      .then(response => {
        // this.MenuItems = response.data;
        console.log(response);
        this.MenuItems = response;
      });
  },

  computed: {
    Total() {}
  },

  methods: {
    AddtoCart(item) {
      // console.log(item);
      this.FoodModifiers = item.modifier;
      this.ItemSizes = item.size;
      // console.log(this.FoodModifiers);
      this.FoodItem = item;
      this.FoodItemName = item.name;
      console.log(this.FoodItemName);
    },
    AddModifierToList(Modifier) {
      this.ModifierList.push(Modifier);
    },
    SendModifiers() {
      let ModifiersTotal = this.ModifierList.reduce(
        (acc, item) => acc + item.price,
        0
      );
      this.Cart = {
        name: this.FoodItem.name,
        price: this.FoodItem.price,
        id: this.FoodItem.id,
        FoodModifiers: this.ModifierList,
        Notes: this.KitchenNotes,
        size: this.selectedSize,
        ModifiersTotal: ModifiersTotal
      };

      this.$nuxt.$emit("test", this.Cart);
      this.ModifierList = [];
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