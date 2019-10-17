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

                    <ItemAddOn v-bind:FoodModifiers="FoodModifiers" />

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
      SelectedModifiers: [],
      FoodModifiers: null,
      Total: null,
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
  created() {
    this.$nuxt.$on("test2", data => {
      this.SelectedModifiers = data;
      // console.log(this.SelectedModifiers);
    });
  },

  computed: {
    // ModifierTotal() {
    //   for (modifier in this.FoodModifiers) {
    //     modifier.price += 0;
    //     return modifier.price;
    //   }
    // }
  },

  methods: {
    AddtoCart(item) {
      this.FoodModifiers = item.modifier;

      this.$nuxt.$emit("test", {
        name: item.name,
        price: item.price,
        id: item.id,
        FoodModifiers: this.SelectedModifiers
      });
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
    // handleFoodModifiers(modifier) {
    //   this.$nuxt.$emit("test2", modifier);
    // }
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