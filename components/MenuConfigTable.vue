<template>
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
          v-for="item in MenuItems"
          :key="item.name"
          :id="item.id"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div>
              <v-row>
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="secondary"
                      v-on="on"
                      fab
                      x-small
                      dark
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <v-row justify="center">
                    <v-form
                      v-model="valid"
                      lazy-validation
                    >
                      <v-card>
                        <v-card-title>
                          <span class="headline">edit {{item.name}} item</span>
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
                                  :rules="nameRules"
                                  color="secondary"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  label="Price*"
                                  v-model="ItemPrice"
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
                                  v-model="ItemType"
                                  required
                                ></v-select>
                                <v-select
                                  v-model="SelectedSizes"
                                  :items="['Small', 'Medium', 'Large', 'Half', 'Full']"
                                  :rules="sizeRules"
                                  required
                                  chips
                                  label="Sizes"
                                  multiple
                                ></v-select>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                              > </v-col>
                              <v-btn
                                color="secondary"
                                dark
                                @click="dialog3 = true"
                              >Edit Modifier</v-btn>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >Close</v-btn>
                          <v-btn
                            :disabled="!valid"
                            color="secondary"
                            :loading="loading"
                            @click="SaveItem()"
                          >Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-form>
                  </v-row>
                </v-dialog>

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
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialog3: false,
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
      ModifiersList: [],
      loading: false
    };
  },
  created() {
    this.$store.dispatch("user/GET_EMAIL");
    this.$store.dispatch("menu/GET_FIREMENU", this.email);
  },
  mounted() {
    // console.log(this.email);
  },
  computed: {
    MenuItems() {
      return this.$store.getters["menu/getMenu"];
    },
    email() {
      return this.$store.getters["user/EmailGetter"];
    }
  },
  mounted() {},
  methods: {
    DeleteItem(item) {
      console.log("deleting item...");
      this.$store.commit("menu/remove", item);
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
    EditItem() {
      this.dialog = true;
    }
  }
};
</script>
