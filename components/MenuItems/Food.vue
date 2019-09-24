<template>
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
                :color="active ? 'primary' : ''"
                light
                height="150"
                @click="AddtoCart"
                class="rounded-card"
              >
                <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                <v-list-item-subtitle>{{item.price}}</v-list-item-subtitle>

                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="display-1 flex-grow-1 text-center"
                  >Item Selected</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MenuItems: [
        { name: "Pizza", price: 7.99, id: 1 },
        { name: "Burger", price: 15.95, id: 2 },
        { name: "HotDog", price: 5.95, id: 3 },
        { name: "Taco", price: 2.99, id: 4 },
        { name: "Carne - asada", price: 22.99, id: 5 },
        { name: "Salad", price: 9.99, id: 6 },
        { name: "Poke", price: 13.99, id: 7 },
        { name: "Greek Yogurt", price: 7.99, id: 8 }
      ],
      price: "$9.99",
      name: "DoubleCheese Burger"
    };
  },
  methods: {
    AddtoCart(item) {
      // this.message = Date();
      // console.log(this.message);

      // this.$nuxt.$emit("test", this.price);
      this.$nuxt.$emit("test", {
        name: this.name,
        price: this.price
      });
    }
  }
};
</script>
<style scoped>
.rounded-card {
  border-radius: 50px;
  text-align: center;
}
</style>