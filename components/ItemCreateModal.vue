<template>
  <div>
    <div>
      <v-row>
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">Add Menu Item</v-btn>
          </template>
          <v-form v-model="valid" lazy-validation>
            <v-card>
              <v-card-title>
                <span class="headline">Create Menu Item</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Item name*"
                        v-model="ItemName"
                        :rules="nameRules"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['Food', 'Drink', 'Dessert']"
                        label="Type*"
                        v-model="ItemType"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Price*"
                        v-model="ItemPrice"
                        :rules="priceRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-btn color="secondary" dark @click="dialog3 = true"
                      >Add Modifier</v-btn
                    >
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog2 = false"
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
            </v-card>
          </v-form>
        </v-dialog>
      </v-row>
    </div>
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog3" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Add Modifier</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Item name*"
                      v-model="ModifierName"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
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
              <v-btn color="blue darken-1" text @click="dialog3 = false"
                >Close</v-btn
              >
              <v-btn color="blue darken-1" text @click="SaveModifier()"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog2: false,
      dialog3: false,
      ModifierName: '',
      ModifierPrice: null,
      ItemName: '',
      ItemType: null,
      ItemPrice: null,
      ModifiersList: [],
      email: null,
      uid: {},
      nameRules: [v => !!v || 'Name is required'],
      // priceRules: [
      //   d => !!/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/ || 'Price required'
      // ],
      priceRules: [
        d => !!d || 'price required',
        d => /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(d) || 'Invalid entry'
      ],
      loading: false,
      valid: true
    }
  },
  methods: {
    SaveModifier() {
      this.dialog3 = false
      this.ModifiersList = this.ModifiersList || []
      var name = this.ModifierName
      var price = this.ModifierPrice
      let modifierID = Math.random()
        .toString(36)
        .substr(2, 9)
      let modifier = {
        name,
        price,
        modifierID
      }

      this.ModifiersList.push(modifier)
      console.log(this.ModifiersList)
      this.ModifierName = null
      this.ModifierPrice = null
    },
    SaveItem() {
      this.dialog2 = false
      var name = this.ItemName
      var price = this.ItemPrice
      var type = this.ItemType
      let modifiers = this.ModifiersList
      let itemID = Math.random()
        .toString(36)
        .substr(2, 9)
      let item = {
        itemID,
        type,
        name,
        price,
        modifiers
      }
      this.$store.commit('menu/add', item)
      // Reset values
      this.ItemName = null
      this.ItemPrice = null
      this.ModifiersList = null
      this.ItemType = null
    }
  }
}
</script>
