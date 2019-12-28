<template>
  <div>
    <div>
      <v-simple-table
        fixed-header
        class="mx-auto"
      >
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item) of MenuItems"
            :key="item.id"
          >
            <td>{{ item.name }}</td>
            <td>$ {{ item.price }}</td>
            <td>
              <div>
                <v-row>
                  <v-btn
                    color="secondary"
                    @click="EditItem(item)"
                    fab
                    x-small
                    dark
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>

                  <v-btn
                    @click="DeleteItem(item)"
                    color="secondary"
                    fab
                    x-small
                    dark
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-row>
              </div>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div>
      <v-row justify="center">
        <v-dialog
          v-model="dialog4"
          persistent
          max-width="450"
        >

          <v-card>

            <v-form
              v-model="valid"
              lazy-validation
            >
              <v-card>
                <v-card-title>
                  <span class="headline">Edit {{this.ItemName}}</span>
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
                          v-model="this.ItemName"
                          :rules="nameRules"
                          color="secondary"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Price*"
                          v-model="this.ItemPrice"
                          :rules="priceRules"
                          color="secondary"
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
                          v-model="this.ItemType"
                          required
                        ></v-select>
                        <v-select
                          v-model="this.ItemSize"
                          :items="['Small', 'Medium', 'Large', 'Half', 'Full']"
                          :rules="sizeRules"
                          required
                          chips
                          label="Sizes"
                          multiple
                        ></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6"></v-col> -->

                      <v-card
                        class="mx-auto"
                        max-width="450"
                        tile
                        v-if="ModifiersList.length > 0"
                      >
                        <v-list rounded>
                          <v-subheader>
                            <v-row
                              justify="center"
                              align="center"
                            >
                              <v-card-text>Item Modifiers</v-card-text>
                            </v-row>
                          </v-subheader>
                          <v-list-item-group color="primary">
                            <v-list-item
                              v-for="(item, i) in ModifiersList"
                              :key="i"
                            >
                              <v-row>
                                <v-list-item-content @click="DeleteModifier(item,i)">
                                  <v-list-item-title v-text="item.name"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                  <v-icon color="pink">mdi-pencil</v-icon>
                                  <v-icon color="pink">mdi-delete</v-icon>
                                </v-list-item-icon>
                              </v-row>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog4 = false"
                  >Close</v-btn>
                  <v-btn
                    :disabled="!valid"
                    color="secondary"
                    :loading="loading"
                    @click="SaveEdit()"
                  >Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props: ["email", "MenuItems"],
  data() {
    return {
      dialog4: false,
      SelectedSizes: [],
      sizeRules: [v => !!v || "At least one Size option is required"],
      nameRules: [v => !!v || "Name is required"],

      priceRules: [
        d => !!d || "price required",
        d => /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(d) || "Invalid entry"
      ],
      valid: true,
      ItemName: "",
      ItemPrice: "",
      ItemType: null,
      ItemSize: null,
      ModifiersList: [],
      loading: false
    };
  },
  created() {
    this.$store.dispatch("user/GET_EMAIL");
  },

  computed: {
    // MenuItems: {
    //   get() {
    //     return this.$store.getters["menu/getMenu"];
    //   },
    //   set(value) {
    //     this.$store.commit("menu/setMenu", value);
    //   }
    // },
    // email() {
    //   return this.$store.getters["user/EmailGetter"];
    // }
  },
  mounted() {
    this.$store.dispatch("menu/GET_FIREMENU", this.email);
  },
  methods: {
    DeleteItem(item) {
      console.log("deleting item...");
      this.$store.commit("menu/remove", item);
    },
    DeleteModifier(item) {
      console.log(item);
      console.log("Modifier Deleted");
    },
    SaveEdit() {
      this.dialog = false;
      let name = this.ItemName;
      let price = this.ItemPrice;
      let type = this.ItemType;
      let modifiers = this.ModifiersList;
      let sizes = this.SelectedSizes;
      let id = this.id;

      let itemID = Math.random()
        .toString(36)
        .substr(2, 9);
      let item = {
        itemID,
        type,
        name,
        price,
        modifiers,
        sizes
      };
      this.$store.commit("menu/edit", item);
    },
    EditItem(item) {
      console.log(item);
      this.dialog4 = true;
      this.ItemName = item.name;
      this.ItemPrice = item.price;
      this.ItemType = item.type;
      this.ModifiersList = item.modifiers;
      this.ItemSize = item.sizes;
      // this.$store.getters["menu/getItem"];
    }
  }
};
</script>
