<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-container fluid>
        <h2>Active Permission List</h2>
        <p>{{ selected }}</p>
        <v-checkbox v-model="selected" label="Access Sales Trasactions" value="SalesTransactions"></v-checkbox>
        <v-checkbox v-model="selected" label="Apply Restricted Discount" value="Discount"></v-checkbox>
        <v-checkbox v-model="selected" label="Cancel trasactions" value="Cancel"></v-checkbox>
        <v-checkbox v-model="selected" label="Change Payment Settings" value="ChangePaySettings"></v-checkbox>
        <v-checkbox v-model="selected" label="Delete Or Void Sale Orders" value="Delete"></v-checkbox>
        <v-checkbox v-model="selected" label="Edit Menu Items" value="EditMenu"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage Inventory" value="Inventory"></v-checkbox>
        <v-checkbox v-model="selected" label="Perform Cash Drop" value="CashDrop"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage Open Orders" value="OpenOrders"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage Customer Profiles" value="Delete"></v-checkbox>
        <v-checkbox v-model="selected" label="Settle All Payments Awayting Tip" value="Tips"></v-checkbox>
        <v-checkbox v-model="selected" label="Customer Loyalty" value="Loyalty"></v-checkbox>
        <v-checkbox v-model="selected" label="Deposit/Withdraw Cash" value="Cash"></v-checkbox>
        <v-checkbox v-model="selected" label="View All Reports" value="Reports"></v-checkbox>
        <v-checkbox v-model="selected" label="View All Trasactions" value="Trasanctions"></v-checkbox>
        <v-checkbox v-model="selected" label="View Restaurant Profile" value="Profile"></v-checkbox>
        <v-checkbox v-model="selected" label="Issue Funds" value="Funds"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage Saved Customer Cards" value="CustomerCards"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage/Add Devices" value="Devices"></v-checkbox>
        <v-checkbox v-model="selected" label="Manage/ Edit Users" value="Users"></v-checkbox>
        <v-checkbox v-model="selected" label="Access Bluetooth Settings" value="Bluetooth"></v-checkbox>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      selected: []
    };
  }
};
</script>