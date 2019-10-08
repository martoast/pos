<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-card flat>
          <v-toolbar color="secondary" dark extended flat>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>CheckOut</v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-card class="mx-auto" max-width="800" style="margin-top: -64px;"></v-card>
          </v-row>

          <v-card class="mx-auto" max-width="800" style="margin-top: 64px;">
            <v-tabs fixed-tabs background-color="indigo" dark height="64" v-model="tab">
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
                        v-on:click="PaidAmount += CartTotal"
                      >Exact</v-btn>
                    </v-row>
                    <v-row class="center">
                      <v-col cols="12" sm="6">
                        <h1>{{PaidAmount}}</h1>
                        <h4>change due: {{ChangeDue}}</h4>
                        <v-row>
                          <v-text-field outlined></v-text-field>
                          <div class="text-center">
                            <v-btn class="display" @click="DeletePaidAmount">Delete</v-btn>
                          </div>
                        </v-row>
                      </v-col>
                    </v-row>
                    <div>
                      <v-card-actions>
                        <v-spacer />

                        <v-btn x-large right color="success" dark @click="dialog = false">Pay Now</v-btn>
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card-text style="height: 50px;"></v-card-text>
                  <v-card>
                    <v-text-field label="Sign here*"></v-text-field>
                    <small>*indicates required field</small>
                    <div class="my-2">
                      <v-btn x-large color="error" dark>Clear Sinature</v-btn>
                      <v-btn x-large color="success" dark @click="dialog = false">Done Signing</v-btn>
                    </div>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>

            <v-divider></v-divider>
          </v-card>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    DeletePaidAmount() {
      this.PaidAmount = null;
    }
  }
};
</script>