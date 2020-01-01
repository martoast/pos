<template>
  <div>

    <v-col
      cols="12"
      sm="6"
      offset-sm="2"
    >
      <v-row
        justify="center"
        align="center"
      >

        <div>
          <!-- <v-container fluid>
            <SearchBar />
          </v-container> -->

          <v-item-group>
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
                      class="rounded-card"
                      dark
                      height="150"
                      @click="AddtoCart(item)"
                      @click.stop="dialog = true"
                    >
                      <v-card-title class="headline mb-1">
                        <h1>{{ item.name }}</h1>
                      </v-card-title>

                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>
      </v-row>
    </v-col>

    <div>

      <v-dialog
        v-model="dialog"
        max-width="400px"
      >

        <v-card class="primary">
          <v-row justify="center">
            <v-card-title>
              <span class="headline">{{ this.FoodItemName }}</span>
            </v-card-title>
          </v-row>
          <v-row justify="center">

            <v-btn-toggle color="deep-purple accent-3">

              <v-btn
                v-for="option in options"
                :key="option.id"
                @click="SaveOrderType(option.title)"
              >
                <v-icon>{{option.icon}}</v-icon>
              </v-btn>

            </v-btn-toggle>
          </v-row>
          <v-card-text>
            <v-container>

              <v-row justify="center">
                <v-select
                  :items="ItemSizes"
                  label="Size"
                  required
                  v-model="selectedSize"
                  :rules="[v => !!v || 'size is required']"
                ></v-select>
              </v-row>

              <v-checkbox
                v-for="Modifier in FoodModifiers"
                :key="Modifier.name"
                v-model="ModifierList"
                :label="Modifier.name"
                :value="Modifier"
              ></v-checkbox>

              <v-textarea
                filled
                auto-grow
                label="Notes for Kitchen"
                rows="4"
                row-height="30"
                shaped
                v-model="KitchenNotes"
              ></v-textarea>

            </v-container>

          </v-card-text>

          <v-btn
            height="50"
            v-if="selectedSize && SelectedOrderType != null "
            color="blue darken-1"
            block
            @click="SaveOrder()"
          >Save</v-btn>

        </v-card>

      </v-dialog>

    </div>
  </div>
</template>
<script>
import SearchBar from "~/components/SearchBar.vue";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      FoodItem: null,
      FoodItemName: null,
      SelectedModifiers: [],
      FoodModifiers: null,
      ModifierList: [],
      ItemsList: [],
      KitchenNotes: "",
      selectedSize: null,
      ItemSizes: null,

      SelectedOrderType: null,

      options: [
        { title: "Dine-In", icon: "mdi-food-fork-drink", id: 0 },
        { title: "Take-Out", icon: "mdi-walk", id: 1 },
        { title: "Delivery", icon: "mdi-bike", id: 2 }
      ],

      Cart: null,

      dialog: false,

      model: null,
      tab: null
    };
  },
  beforeCreate() {
    this.$store.dispatch("user/GET_EMAIL");
  },

  created() {
    // fetch("http://localhost:3002/food")
    //   .then(response => response.json())
    //   .then(response => {
    //     // this.MenuItems = response.data;
    //     console.log(response);
    //     this.MenuItems = response;
    //   });

    this.$store.dispatch("menu/GET_FIREMENU", this.email);
  },

  computed: {
    MenuItems() {
      return this.$store.getters["menu/getFoodMenu"];
    },
    email() {
      return this.$store.getters["user/EmailGetter"];
    }
  },

  methods: {
    SaveOrderType(option) {
      this.SelectedOrderType = option;
    },
    AddtoCart(item) {
      // console.log(item);
      this.FoodModifiers = item.modifiers;
      this.ItemSizes = item.sizes;
      // console.log(this.FoodModifiers);
      this.FoodItem = item;
      this.FoodItemName = item.name;
      this.ItemsList.push(item);
      // console.log(this.FoodItemName);
    },

    SaveOrder() {
      let ModifiersTotal = this.ModifierList.reduce(
        (acc, item) => acc + parseFloat(item.price),
        0
      );
      let ItemsTotal = this.ItemsList.reduce(
        (acc, item) => acc + item.price,
        0
      );
      let OrderTotal = parseFloat(ModifiersTotal) + parseFloat(ItemsTotal);
      OrderTotal = parseFloat(OrderTotal).toFixed(2);

      let OrderID = Math.random()
        .toString(36)
        .substr(2, 9);
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      const order = {
        id: OrderID,
        date: currentDateWithFormat,
        OrderTotal: OrderTotal,
        OrderType: this.SelectedOrderType,
        name: this.FoodItem.name,
        price: this.FoodItem.price,
        Foodid: this.FoodItem.id,
        FoodModifiers: this.ModifierList,
        Notes: this.KitchenNotes,
        size: this.selectedSize,
        ModifiersTotal: ModifiersTotal.toFixed(2)
      };

      // this.$nuxt.$emit("order", order);
      this.$store.dispatch("ShoppingCart/ADD_TO_CART", order);

      this.ModifierList = [];
      this.ItemsList = [];
      this.dialog = false;
      this.KitchenNotes = "";
      this.selectedSize = null;
      this.ItemSizes = [];
      this.SelectedOrderType = null;
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
