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
      <MenuTable />

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
import MenuTable from "~/components/MenuConfigTable";
export default {
  // async fetch({ store, params }) {
  //   await store.dispatch("GET_MENU");
  // },
  layout: "settings",
  components: {
    MenuTable
  },
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
      // MenuItems: null,
      // MenuItems: this.$store.state["menu/MenuItems"],
      email: null,
      uid: {}
    };
  },
  created() {},

  methods: {
    SaveModifier() {
      this.dialog3 = false;
      this.ModifiersList = this.ModifiersList || [];
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
      this.$store.commit("menu/add", item);
      // Reset values
      this.ItemName = null;
      this.ItemPrice = null;
      this.ModifiersList = null;
      this.ItemType = null;
    },
    SaveMenu() {
      this.$fireAuth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          alert(`Logged in with ${user.email}`);
          console.log(user.email);
          this.$fireStore
            .collection("users")
            .doc(user.email)
            .set({ Menu: this.MenuItems });
        } else {
          // No user is signed in.
          console.log("Only Registered Users can create a Menu.");
        }
      });
    },
    DeleteItem(item) {
      // this.dialog4 = true;
      // this.MenuItems.splice(this.MenuItems.indexOf(item), 1);
      // console.log(this.MenuItems);
      this.$store.commit("menu/remove", item);
    }
  }
};
</script>