<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12">
      <v-card-title>Employee # {{id}}</v-card-title>
      <v-card-text>
        <div class="my-4 subtitle-1 white--text">• User Permission Access •</div>
        <div class="my-4 subtitle-1 white--text">{{selected}}</div>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="selected"
                label="Access Sales Trasactions"
                value="SalesTransactions"
                color="green"
              ></v-switch>
              <v-switch
                v-model="selected"
                label="Apply Restricted Discount"
                value="Discount"
                color="green"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch v-model="selected" label="Cancel trasactions" value="Cancel" color="green"></v-switch>
              <v-switch
                v-model="selected"
                label="Change Payment Settings"
                value="ChangePaySettings"
                color="green"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="selected"
                label="Delete Or Void Sale Orders"
                value="Delete"
                color="green"
              ></v-switch>
              <v-switch v-model="selected" label="Edit Menu Items" value="EditMenu" color="green"></v-switch>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-switch v-model="selected" label="Manage Inventory" value="Inventory" color="green"></v-switch>
              <v-switch v-model="selected" label="Perform Cash Drop" value="CashDrop" color="green"></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                vv-model="selected"
                label="Manage Open Orders"
                value="OpenOrders"
                color="green"
              ></v-switch>
              <v-switch
                v-model="selected"
                label="Manage Customer Profiles"
                value="Profiles"
                color="green"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="selected"
                label="Settle All Payments Awayting Tip"
                value="Tips"
                color="red darken-3"
              ></v-switch>
              <v-switch v-model="selected" label="Customer Loyalty" value="Loyalty" color="green"></v-switch>
            </v-col>
          </v-row>
        </v-container>

        <div></div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <div class="title text--primary">Shift Time:</div>
        <h2>{{Shift}}</h2>
        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
          <v-chip v-model="Shift" value="A">9:00AM-5:30PM</v-chip>
          <v-chip>12:00PM-5:30PM</v-chip>
          <v-chip>3:30PM-9:00PM</v-chip>
          <v-chip>9:00PM-3:00AM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="purple accent-4" text @click="reserve">Reserve</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
      selection: 2,
      Shift: [],
      ex11: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3"
      ],
      selected: []
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>