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

      dialog: false
    };
  },
  created() {
    this.$nuxt.$on("OrderComplete", data => {
      this.$store.commit("ShoppingCart/ClearCart");
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
