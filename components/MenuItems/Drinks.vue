<template>
  <div>
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col v-for="item in MenuItems" :key="item.id" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="150"
                @click="AddtoCart"
              >
                {{item.name}}{{"----"}}{{item.price}}
                <v-scroll-y-transition>
                  <div v-if="active" class="display-3 flex-grow-1 text-center">Item Selected</div>
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
        { name: "Soda", price: 7.99, id: 1 },
        { name: "Bottled Water", price: 15.95, id: 2 },
        { name: "Beer", price: 5.95, id: 3 },
        { name: "Whisky", price: 2.99, id: 4 },
        { name: "Smoothie", price: 22.99, id: 5 },
        { name: "Jamaica", price: 9.99, id: 6 }
      ],
      price: "$9.99"
    };
  },
  methods: {
    AddtoCart() {
      this.message = Date();
      console.log(this.message);

      this.$nuxt.$emit("test", this.price);
      this.$nuxt.$emit("test2", this.name);
    }
  }
};
</script>