<template>
  <div>
    <v-card
      width="450"
      height="750"
      :elevation="5"
      style="margin-top: 800px;"
      class="mx-auto"
    >

      <v-card-title class="blue white--text">
        <span class="headline">
          {{OrderType}}
          <v-icon large>{{icon}}</v-icon>
        </span>

        <div class="flex-grow-1"></div>

        <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              icon
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(option, i) in options"
              :key="i"
              @click="selected(option)"
            >
              <v-list-item-title>{{option.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>

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
            :key="item.price"
          >
            <td>{{item.FoodModifiers.name}}</td>
            <td>{{ item.FoodModifiers.price }}</td>
          </tr>
        </tbody>

      </v-simple-table>
      <v-card-actions class="card-actions">

        <div>
          <h2>Total: $ {{CartTotal}}</h2>
        </div>
      </v-card-actions>

    </v-card>

    <CheckOutModal />

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
      CartItems: [],
      Test: [],

      Total: [],

      OrderType: "Dine-In",
      icon: "mdi-food-fork-drink",

      options: [
        { title: "Dine-In", icon: "mdi-food-fork-drink" },
        { title: "Take-Out", icon: "mdi-walk" },
        { title: "Delivery", icon: "mdi-bike" }
      ]
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      // this.total = data;
      this.CartItems.push(data);
      // this.FoodModifiers = this.CartItems.FoodModifiers;
      console.log(this.CartItems);
    });
  },
  methods: {
    DeleteItem(item) {
      this.CartItems.splice(item, 1);
      this.Total.splice(item, 1);
    },
    DeleteModifier(modifier) {
      // this.CartItems.splice(item, 1);
      // this.Total.splice(item, 1);
    },
    selected(option) {
      console.log(option.title);
      this.OrderType = option.title;
      this.icon = option.icon;
    }
  },
  computed: {
    CartTotal() {
      return this.Total.reduce((acc, item) => acc + item.price, 0);
    },
    ChangeDue() {
      if (this.PaidAmount) {
        return (this.ChangeDue = this.CartTotal - this.PaidAmount);
      }
    }
  }
};
</script>
<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>