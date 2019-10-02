<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="800"
    >
      <v-container fluid>
        <h2>Accepted Payment Methods</h2>
        <p>{{ selected }}</p>
        <v-checkbox
          v-model="selected"
          label="Credit"
          value="credit"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Debit"
          value="debit"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Cash"
          value="cash"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Coupon"
          value="coupon"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Gift Card"
          value="giftcard"
        ></v-checkbox>
      </v-container>
      <hr />
      <h2>Receipt Signature Threshold</h2>
      <p>Minimum Signature Amount</p>
      <p>${{ minsignature }}</p>
      <v-container>
        <v-col
          cols="12"
          sm="10"
          md="10"
        >
          <v-text-field
            v-model="minsignature"
            placeholder="$5.00"
            outlined
          ></v-text-field>
        </v-col>
      </v-container>
      <v-container fluid>
        <h2>Tip Amounts</h2>
        <p>{{ tip_amounts }}</p>
        <v-checkbox
          v-model="tip_amounts"
          label="%5"
          value="5"
        ></v-checkbox>
        <v-checkbox
          v-model="tip_amounts"
          label="%10"
          value="10"
        ></v-checkbox>
        <v-checkbox
          v-model="tip_amounts"
          label="%15"
          value="15"
        ></v-checkbox>
        <v-checkbox
          v-model="tip_amounts"
          label="%20"
          value="20"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Gift Card"
          value="giftcard"
        ></v-checkbox>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      selected: [],
      tip_amounts: [],
      minsignature: null,
      font: null,
      language: null,
      timedisplay: null,
      displatitems: null
    };
  }
};
</script>