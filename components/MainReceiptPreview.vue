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
            :key="item.id"
          >
            <td @click="DeleteItem(item)">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{item.name}}</v-list-item-title>
                  <div v-if="item.FoodModifiers">
                    <v-list-item-subtitle
                      v-for="modifier in item.FoodModifiers"
                      :key="modifier.id"
                    >{{modifier.name}}</v-list-item-subtitle>
                  </div>

                </v-list-item-content>
              </v-list-item>
            </td>
            <td>{{ item.OrderTotal }}</td>

          </tr>
          <!-- <tr
            v-for="item in CartItems"
            :key="item.id"
          >
            <td>{{ item.size }}</td> -->
          <!-- <td>{{ item.FoodModifiers.price }}</td> -->
          <!-- </tr> -->

          <!-- <tr
            v-for="item in CartItems"
            :key="item.id"
          >
            <td @click="DeleteModifier(item)">{{ item.FoodModifiers }}</td>
            <td>
              {{ item.FoodModifiers.price }}
            </td>
          </tr> -->
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
      :CartTotal="parseFloat(CartTotal)"
      :CartItems="CartItems"
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

      dialog: false
    };
  },

  created() {
    // this.$nuxt.$on("OrderComplete", data => {
    //   this.$store.dispatch(
    //     "ShoppingCart/SENDORDER",
    //     this.$store.state["ShoppingCart/Cart"]
    //   );
    //   this.email;
    // });
  },

  computed: {
    CartTotal() {
      return this.$store.getters["ShoppingCart/GetTotal"].toFixed(2);
    },
    CartItems() {
      return this.$store.getters["ShoppingCart/getCart"];
    }
  },
  methods: {
    DeleteItem(item) {
      this.$store.commit("ShoppingCart/remove", item);
    },
    DeleteModifier(item) {
      this.$store.commit("ShoppingCart/remove", item);
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
