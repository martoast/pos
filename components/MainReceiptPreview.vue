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
      <v-card-title class="blue white--text">
        <span class="headline">
          {{ OrderType }}
          <v-icon large>{{ icon }}</v-icon>
        </span>

        <div class="flex-grow-1"></div>
        <span class="headline">
          <v-spacer></v-spacer>
          {{ this.CurrentDate }}
          {{ this.id }}
        </span>

        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(option, i) in options"
              :key="i"
              @click="selected(option)"
            >
              <v-list-item-title>{{ option.title }}</v-list-item-title>
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
          <tr v-for="item in CartItems" :key="item.name">
            <td @click="DeleteItem(item)">{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr v-for="item in CartItems" :key="item.id">
            <td>{{ item.size }}</td>
            <!-- <td>{{ item.FoodModifiers.price }}</td> -->
          </tr>

          <tr v-for="item in FoodModifiers" :key="item.price">
            <td @click="DeleteModifier(item)">{{ item.name }}</td>
            <td>
              {{ item.price }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card-actions class="card-actions">
        <div v-if="this.CartItems.length >= 1">
          <h2>Total: $ {{ this.CartTotal }}</h2>
        </div>
      </v-card-actions>
    </v-card>
    <div v-if="this.CartItems.length >= 1">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn height="50" block color="success" v-on="on">CheckOut</v-btn>
        </template>
        <v-card>
          <v-card flat>
            <v-tabs
              fixed-tabs
              background-color="indigo"
              dark
              height="64"
              v-model="tab"
            >
              <v-tab>Pay with Cash</v-tab>
              <v-tab>Pay with Card</v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card elevation="12">
                    <v-row justify="center">
                      <h2 class="center">Choose Amount</h2>
                    </v-row>
                    <v-row justify="center">
                      <h2 class="center">Order ID: # {{ this.id }}</h2>
                    </v-row>

                    <v-row class="center">
                      <v-btn
                        x-large
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        v-on:click="PaidAmount += 1"
                        >$1.00</v-btn
                      >
                      <v-btn
                        x-large
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        v-on:click="PaidAmount += 5"
                        >$5.00</v-btn
                      >
                      <v-btn
                        x-large
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        v-on:click="PaidAmount += 10"
                        >$10.00</v-btn
                      >
                      <v-btn
                        x-large
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        v-on:click="PaidAmount += 20"
                        >$20.00</v-btn
                      >
                      <v-btn
                        x-large
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        v-on:click="PaidAmount += this.CartTotal"
                        >Exact</v-btn
                      >
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="PaidAmount"
                          filled
                          label="Enter Amount"
                          clearable
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row justify="center">
                      <h2>Change Due: ${{ ChangeDue }}</h2>
                    </v-row>

                    <div>
                      <v-card-actions>
                        <v-spacer />

                        <v-btn
                          x-large
                          right
                          color="success"
                          dark
                          :to="'/'"
                          @click="OrderFinish()"
                          >Pay ${{ PaidAmount }}</v-btn
                        >
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card-text></v-card-text>
                  <v-card>
                    <v-text-field label="Sign here*"></v-text-field>
                    <small>*indicates required field</small>
                    <v-card-actions>
                      <v-spacer />

                      <v-btn
                        x-large
                        right
                        color="success"
                        dark
                        @click="dialog = false"
                        >Pay ${{ PaidAmount }}</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>

            <v-divider></v-divider>
          </v-card>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import CheckOutModal from '~/components/CheckOutModal.vue'
export default {
  components: {
    CheckOutModal
  },
  data() {
    return {
      CartItems: [],
      FoodModifiers: null,
      Test: [],
      dialog: false,
      PaidAmount: null,
      tab: null,
      CartTotal: null,
      CurrentDate: null,
      id: null,

      Total: [],

      OrderType: 'Dine-In',
      icon: 'mdi-food-fork-drink',

      options: [
        { title: 'Dine-In', icon: 'mdi-food-fork-drink' },
        { title: 'Take-Out', icon: 'mdi-walk' },
        { title: 'Delivery', icon: 'mdi-bike' }
      ]
    }
  },
  created() {
    this.$nuxt.$on('order', data => {
      // this.total = data;
      // console.log(data.FoodModifiers);
      this.FoodModifiers = data.FoodModifiers
      this.id = data.id
      this.CurrentDate = data.date
      this.CartTotal = data.OrderTotal
      console.log(this.CartTotal)
      this.CartItems.push(data)
      // this.FoodModifiers = this.CartItems.FoodModifiers;
      // console.log(this.CartItems);
      // console.log(this.CartItems.FoodModifiers);
    })
  },
  methods: {
    DeleteItem(item) {
      this.CartItems.splice(item, 1)
      this.FoodModifiers = null
    },
    DeleteModifier(item) {
      this.FoodModifiers.splice(item, 1)
      // this.Total.splice(item, 1);
    },
    selected(option) {
      // console.log(option.title);
      this.$nuxt.$emit('OrderType', option)
      // this.OrderType = option.title;
      // this.icon = option.icon;
    },

    OrderFinish() {
      this.dialog = false
      this.CartItems = []
      this.FoodModifiers = []
      this.CartTotal = null
      console.log(this.CartItems)
    }
  },

  computed: {
    ChangeDue() {
      if (this.PaidAmount > this.CartTotal) {
        return (this.PaidAmount - this.CartTotal).toFixed(2)
      } else {
        return '0.00'
      }
    }
  }
}
</script>
<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
