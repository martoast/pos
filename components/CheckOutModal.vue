<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          height="50"
          block
          color="success"
          v-on="on"
        >CheckOut</v-btn>
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

                  <v-row class="center">
                    <v-btn
                      x-large
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      v-on:click="PaidAmount += 1"
                    >$1.00</v-btn>
                    <v-btn
                      x-large
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      v-on:click="PaidAmount += 5"
                    >$5.00</v-btn>
                    <v-btn
                      x-large
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      v-on:click="PaidAmount += 10"
                    >$10.00</v-btn>
                    <v-btn
                      x-large
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      v-on:click="PaidAmount += 20"
                    >$20.00</v-btn>
                    <v-btn
                      x-large
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      v-on:click="PaidAmount += this.CartTotal"
                    >Exact</v-btn>
                  </v-row>
                  <v-row justify="center">
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        v-model="PaidAmount"
                        filled
                        label="Enter Amount"
                        clearable
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <div v-if="this.PaidAmount > this.CartTotal">
                    <v-row justify="center">
                      <h2>Change Due: ${{ ChangeDue }}</h2>
                    </v-row>
                  </div>

                  <div>
                    <v-card-actions>
                      <v-spacer />

                      <v-btn
                        x-large
                        right
                        color="success"
                        dark
                        :to="'/Register'"
                        @click="OrderFinish()"
                      >Pay ${{ PaidAmount }}</v-btn>
                    </v-card-actions>
                  </div>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <PayWithCard />
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>

          <v-divider></v-divider>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PayWithCard from "~/components/PayWithCard";
export default {
  components: {
    PayWithCard
  },
  props: {
    CartTotal: Number
  },
  data() {
    return {
      PaidAmount: null,
      tab: null,
      dialog: false
    };
  },
  methods: {
    DeletePaidAmount() {
      this.PaidAmount = null;
    },

    OrderFinish() {
      this.dialog = false;
      // const messageRef = this.$fireStore.collection("orders").doc(OrderID);
      // messageRef.set(order);

      console.log("Order Complete");

      this.$nuxt.$emit("OrderComplete");
    }
  },
  computed: {
    ChangeDue() {
      if (this.PaidAmount > this.CartTotal) {
        return (this.PaidAmount - this.CartTotal).toFixed(2);
      } else {
        return "0.00";
      }
    }
  }
};
</script>
