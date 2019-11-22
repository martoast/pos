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
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in MenuItems"
            :key="item.name"
            @click="DeleteItem(item)"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
        <div
          class="text-center"
          v-if="this.dialog4"
        >
          <v-dialog
            v-model="dialog4"
            width="500"
          >

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Edit Menu
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog4 = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-simple-table>
      <v-card-actions>
        <v-row justify="center">
          <v-btn
            class="secondary"
            @click="SaveMenu()"
          >
            Save Menu
          </v-btn>

        </v-row>

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
            <v-btn>
              Add Modifier
            </v-btn>
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
import { mapMutations } from "vuex";
export default {
  // async fetch({ store, params }) {
  //   await store.dispatch("GET_MENU");
  // },
  layout: "settings",
  data() {
    return {
      dialog2: false,
      dialog3: false,
      dialog4: false,
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
  created() {
    // var user = this.$fireAuth.currentUser;
    // console.log(user);
    // get menu from store to fill table
    // this.MenuItems = this.$store.state.user.MenuItems;
    // console.log(
    //   this.$fireStore
    //     .collection("users")
    //     .doc(user.email)
    //     .get()
    // );
    // if (user) {
    //   console.log(
    //     this.$fireStore
    //       .collection("users")
    //       .doc(user.email)
    //       .get()
    //   );
    // }
    // this.$fireAuth.onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     alert(`Logged in with ${user.email}`);
    //     this.email = user.email;
    //     // console.log(this.email);
    //     try {
    //       console.log(
    //         this.$fireStore
    //           .collection("users")
    //           .doc(user.email)
    //           .get()
    //       );
    //     } catch {
    //       console.log("No Menu Created");
    //       return;
    //     }
    //   } else {
    //     // No user is signed in.
    //   }
    // });
  },
  methods: {
    SaveModifier() {
      this.dialog3 = false;
      var name = this.ModifierName;
      var price = this.ModifierPrice;
      let modifierID = Math.random()
        .toString(36)
        .substr(2, 9);
      let modifier = {
        name,
        price,
        modifierID
      };

      this.ModifiersList.push(modifier);
      console.log(this.ModifiersList);
      this.ModifierName = null;
      this.ModifierPrice = null;
    },
    SaveItem() {
      this.dialog2 = false;
      var name = this.ItemName;
      var price = this.ItemPrice;
      var type = this.ItemType;
      let modifiers = this.ModifiersList;
      let itemID = Math.random()
        .toString(36)
        .substr(2, 9);
      let item = {
        itemID,
        type,
        name,
        price,
        modifiers
      };
      this.MenuItems.push(item);
      console.log(this.MenuItems);
      this.ItemName = null;
      this.ItemPrice = null;
      this.ModifiersList = null;
      this.ItemType = null;
    },
    SaveMenu() {
      this.$store.commit("menu/add", this.MenuItems);
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
        console.log("Only Registered Users can create a Menu.");
      }
    },
    DeleteItem(item) {
      // this.dialog4 = true;
      this.MenuItems.splice(this.MenuItems.indexOf(item), 1);
      console.log(this.MenuItems);
    }
  }
};
</script>