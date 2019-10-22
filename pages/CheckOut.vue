<template>
  <div>
    <section class="section">
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row>
        <h1>
          space
        </h1>
      </v-row>
      <v-row justify="center">

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
                    <h3 class="center">Choose Amount</h3>
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
                        v-on:click="PaidAmount += this.Total"
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

                    <h1>{{PaidAmount}}</h1>
                    <v-row justify="center">

                      <h3>
                        Change Due:
                      </h3>
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
                        >Pay Now</v-btn>
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
                      <template v-slot:activator="{ on }">

                        <v-btn
                          x-large
                          right
                          color="success"
                          dark
                          :to="'/'"
                        >Pay Now</v-btn>
                      </template>
                    </v-card-actions>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>

            <v-divider></v-divider>
          </v-card>

        </v-card>

      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      PaidAmount: null,
      tab: null,
      Total: null
    };
  },
  created() {
    this.$nuxt.$on("total", data => {
      console.log("tesign");
      this.Total = data;
      console.log(this.Total);
    });
  },
  methods: {
    DeletePaidAmount() {
      // this.PaidAmount = null;
      console.log(this.Total);
    },
    CloseDialog() {}
  }
};
</script>
<style scoped>
section {
  display: flex;
  flex-flow: column;

  height: 100%;
  width: 100%;
}
</style>
