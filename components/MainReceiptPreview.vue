<template>
  <div>
    <v-card
      width="450"
      min-width="200"
      height="750"
      :elevation="5"
      style="margin-top: 800px;"
      class="mx-auto"
    >

      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Item</th>
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in CartItems"
            :key="item.name"
          >
            <td @click="DeleteItem(item)">{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr
            v-for="item in CartItems"
            :key="item.id"
          >
            <td>{{ item.size }}</td>
            <!-- <td>{{ item.FoodModifiers.price }}</td> -->
          </tr>

          <tr
            v-for="item in FoodModifiers"
            :key="item.price"
          >
            <td @click="DeleteModifier(item)">{{ item.name }}</td>
            <td>
              {{ item.price }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card-actions class="card-actions">
        <div v-if="this.CartItems">
          <h2>Total: $ {{ CartTotal }}</h2>
        </div>
      </v-card-actions>
    </v-card>
    <CheckOutModal
      v-if="this.CartItems"
      :CartTotal="CartTotal"
    />
  </div>
</template>

<script>
import CheckOutModal from "~/components/CheckOutModal.vue";
export default {
  components: {
    CheckOutModal
  },
  data() {
    return {
      FoodModifiers: null,
      Test: [],
      dialog: false,

      CurrentDate: null,
      id: null,

      OrderType: "Dine-In",
      icon: "mdi-food-fork-drink"
    };
  },
  created() {
    // this.$nuxt.$on("order", data => {
    //   // console.log(data.FoodModifiers);
    //   this.FoodModifiers = data.FoodModifiers;
    //   this.id = data.id;
    //   this.CurrentDate = data.date;
    //   // this.CartTotal = data.OrderTotal;
    //   // console.log(this.CartTotal);
    //   this.CartItems.push(data);
    //   this.FoodModifiers = this.CartItems.FoodModifiers;
    //   console.log(this.CartItems);
    // });

    this.$nuxt.$on("OrderComplete", data => {
      console.log("test");
      this.CartItems = [];
      this.$store.commit("ShoppingCart/ClearCart");
      // this.CartTotal = null;
    });
  },
  computed: {
    CartTotal() {
      return this.$store.getters["ShoppingCart/GetTotal"];
    },
    CartItems() {
      return this.$store.getters["ShoppingCart/getCart"];
    }
  },
  methods: {
    DeleteItem(item) {
      this.CartItems.splice(item, 1);
      this.$store.commit("ShoppingCart/remove", item);
      this.FoodModifiers = null;
    },
    DeleteModifier(item) {
      this.FoodModifiers.splice(item, 1);
      this.$store.commit("ShoppingCart/remove", item);
      // this.Total.splice(item, 1);
    }
  }
};
</script>
<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
