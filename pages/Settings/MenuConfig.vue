<template>
  <div>
    <v-card>
      <v-row>
        <v-card-title>Menu Config</v-card-title>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog2"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">Add Menu Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Create Menu Item</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Item name*"
                      v-model="ItemName"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      :items="['Food', 'Drink', 'Dessert']"
                      label="Type*"
                      v-model="ItemType"
                      required
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Price*"
                      v-model="ItemPrice"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-btn
                    color="secondary"
                    dark
                    @click="dialog3 = true"
                  >Add Modifier</v-btn>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog2 = false"
              >Close</v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="SaveItem()"
              >Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-simple-table
        fixed-header
        height="300px"
      >
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in MenuItems"
            :key="item.name"
          >
            <td>{{ item.Name }}</td>
            <td>{{ item.Price }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card-actions>
        <v-btn
          class="secondary"
          @click="SaveMenu()"
        >
          Save Menu
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center">
      <v-dialog
        v-model="dialog3"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Add Modifier</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center">
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Item name*"
                    v-model="ModifierName"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Price*"
                    v-model="ModifierPrice"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog3 = false"
            >Close</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="SaveModifier()"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      dialog2: false,
      dialog3: false,
      ModifierName: "",
      ModifierPrice: null,
      ItemName: "",
      ItemType: null,
      ItemPrice: null,
      ModifiersList: [],
      MenuItems: [],
      email: null,
      uid: {}
    };
  },
  created() {},
  methods: {
    SaveModifier() {
      this.dialog3 = false;
      var Name = this.ModifierName;
      var Price = this.ModifierPrice;
      let ModifierID = Math.random()
        .toString(36)
        .substr(2, 9);
      let Modifier = {
        Name,
        Price,
        ModifierID
      };

      this.ModifiersList.push(Modifier);
      console.log(this.ModifiersList);
    },
    SaveItem() {
      this.dialog2 = false;
      var Name = this.ItemName;
      var Price = this.ItemPrice;
      let Modifiers = this.ModifiersList;
      let ItemID = Math.random()
        .toString(36)
        .substr(2, 9);
      let item = {
        ItemID,
        Name,
        Price,
        Modifiers
      };
      this.MenuItems.push(item);
      console.log(this.MenuItems);
    },
    SaveMenu() {
      var user = this.$fireAuth.currentUser;

      if (user) {
        // User is signed in.
        console.log(user.email);
        this.$fireStore
          .collection("users")
          .doc(user.email)
          .set({ Menu: this.MenuItems });
      } else {
        // No user is signed in.
        alert("Only Registered Users can create a Menu.");
      }
    }
  }
};
</script>