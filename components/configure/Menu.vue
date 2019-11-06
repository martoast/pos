<template>
  <div class="text-center">
    <v-dialog v-model="dialog2" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>

      <v-card max-width="500px">
        <v-card-title class="headline grey lighten-2" primary-title>Configure Menu</v-card-title>

        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" text @click="dialog2 = false">I accept</v-btn>
          <v-btn color="blue darken-1" text @click="SendModifiers()">Save</v-btn>-->

          <v-btn color="secondary" dark @click="dialog3 = true">Add Menu Item</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-dialog v-model="dialog3" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create Menu Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Item name*" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select :items="['Food', 'Drink', 'Dessert']" label="Type*" required></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Price*" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog3 = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog3 = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog2: false,
      dialog3: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  }
};
</script>