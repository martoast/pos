<template>
  <div>
    <v-simple-table fixed-header class="mx-auto">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in MenuItems" :key="item.name" :id="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="my-2">
              <v-row>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="secondary" v-on="on" fab x-small dark>
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
                  </template>
                  <v-row justify="center">
                    <v-form v-model="valid" lazy-validation
                      ><v-card>
                        <v-card-title>
                          <span class="headline">{{ item.name }}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  required
                                  :rules="nameRules"
                                  v-model="ItemName"
                                  :value="item.name"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  label="Price*"
                                  :rules="priceRules"
                                  required
                                  v-model.number="ItemPrice"
                                  >{{ item.price }}</v-text-field
                                >
                              </v-col>

                              <v-col cols="12" sm="6">
                                <v-select
                                  v-model="SelectedSizes"
                                  :items="[
                                    'Small',
                                    'Medium',
                                    'Large',
                                    'Half',
                                    'Full'
                                  ]"
                                  :rules="sizeRules"
                                  :value="item.sizes"
                                  required
                                  chips
                                  label="Sizes"
                                  multiple
                                ></v-select>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-select
                                  v-model="ItemType"
                                  :items="['Food', 'Drink', 'Dessert']"
                                  :value="item.type"
                                  required
                                  chips
                                  label="Type"
                                  multiple
                                ></v-select>
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
                            @click="dialog = false"
                            >Close</v-btn
                          >

                          <v-btn
                            :disabled="!valid"
                            color="secondary"
                            :loading="loading"
                            @click="SaveItem()"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card></v-form
                    >
                  </v-row>
                </v-dialog>
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
      SelectedSizes: [],
      sizeRules: [v => !!v || 'At least one Size option is required'],
      nameRules: [v => !!v || 'Name is required'],

      priceRules: [
        d => !!d || 'price required',
        d => /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(d) || 'Invalid entry'
      ],
      valid: true,
      ItemName: '',
      ItemPrice: '',
      ItemType: null,
      ModifiersList: [],
      loading: false
    }
  },
  created() {},
  computed: {
    MenuItems() {
      return this.$store.getters['menu/getMenu']
    }
  },
  mounted() {},
  methods: {
    DeleteItem(item) {
      console.log('deleting item...')
      this.$store.commit('menu/remove', item)
    },
    SaveItem() {
      this.dialog = false
      var name = this.ItemName
      var price = this.ItemPrice
      var type = this.ItemType
      let modifiers = this.ModifiersList
      let sizes = this.SelectedSizes
      let id = this.id

      let itemID = Math.random()
        .toString(36)
        .substr(2, 9)
      let item = {
        itemID,
        type,
        name,
        price,
        modifiers,
        sizes
      }
      this.$store.commit('menu/EDIT_CASE', item)
    }
  }
}
</script>
