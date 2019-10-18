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
            v-for="item in MenuItems"
            :key="item.name"
          >
            <td @click="DeleteItem(item)">{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>{{item.FoodModifiers}}</td> -->
          </tr>

          <tr
            v-for="item in MenuItems"
            :key="item.name"
          >
            <td>{{item.name}}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <h4>Total: $ {{CartTotal}}</h4>
          </tr>
        </tfoot>
      </v-simple-table>

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
      MenuItems: null,

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
      this.MenuItems = data;
      console.log(this.MenuItems);
    });
  },
  methods: {
    DeleteItem(item) {
      // this.MenuItems.splice(item, 1);
      // this.Total.splice(item, 1);
    },
    DeleteModifier(modifier) {
      // this.MenuItems.splice(item, 1);
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