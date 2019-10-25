<template>
  <div>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        offset-sm="2"
      >

        <v-container fluid>
          <SearchBar />
          <v-row>
            <v-col
              v-for="item in MenuItems"
              :key="item.id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                @click="AddtoCart(item)"
                @click.stop="dialog = true"
                class="rounded-card"
              >
                <v-img
                  :src=item.img
                  aspect-ratio="1"
                  class="grey lighten-2"
                >

                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>

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
            <v-row>
              <v-card-title>
                <span class="headline">{{this.FoodItemName}}</span>
              </v-card-title>

            </v-row>
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
      toggle_exclusive: [],
      OrderType: null,

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
      // console.log(this.FoodItemName);
    },
    AddModifierToList(Modifier) {
      this.ModifierList.push(Modifier);
    },
    SendModifiers() {
      // if ((this.toggle_exclusive = 0)) {
      //   let OrderType = "Dine-in";
      // }
      // if ((this.toggle_exclusive = 1)) {
      //   let OrderType = "to-go";
      // }
      // if ((this.toggle_exclusive = 2)) {
      //   let OrderType = "delivery";
      // }
      let ModifiersTotal = this.ModifierList.reduce(
        (acc, item) => acc + item.price,
        0
      );
      let OrderTotal = ModifiersTotal + this.FoodItem.price;
      OrderTotal = OrderTotal.toFixed(2);
      // console.log(OrderTotal);
      // this.$nuxt.$on("OrderType", data => {
      //   console.log(data);
      //   this.OrderType = data;
      // });
      let OrderID = Math.random()
        .toString(36)
        .substr(2, 9);
      const order = {
        id: OrderID,
        OrderTotal: OrderTotal,
        OrderType: this.OrderType,
        name: this.FoodItem.name,
        price: this.FoodItem.price,
        Foodid: this.FoodItem.id,
        FoodModifiers: this.ModifierList,
        Notes: this.KitchenNotes,
        size: this.selectedSize,
        ModifiersTotal: ModifiersTotal
      };

      this.$nuxt.$emit("test", order);
      const messageRef = this.$fireStore.collection("orders").doc(OrderID);
      messageRef.set(order);
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
img {
  border-radius: 50%;
}
</style>