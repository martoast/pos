<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on">Empezar</v-btn>
      </template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" color="secondary">Register</v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2" color="secondary">User Info</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form>
              <v-card-title>
                <span class="headline">Create Account</span>
              </v-card-title>
              <v-card>
                <v-row align="center">
                  <v-col>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="email"
                          :rules="emailRules"
                          @input="updateMessage"
                          color="secondary"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :rules="nameRules"
                          label="Password*"
                          type="password"
                          color="secondary"
                          required
                        ></v-text-field>
                        <v-checkbox
                          v-model="checkbox"
                          :rules="[v => !!v || 'You must agree to continue!']"
                          label="Agree with terms of service?*"
                        ></v-checkbox>
                      </v-col>
                    </v-form>
                    <small>*indicates required field</small>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false">Cancel</v-btn>
                  <v-btn
                    color="secondary"
                    v-if="valid && this.email && this.password && this.checkbox != null || false"
                    @click="createUser();e1 = 2"
                  >Create Account</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card>
                <v-card-title>
                  <span class="headline">User Info</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                          :rules="nameRules"
                          v-model="name"
                          color="secondary"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal Last Name"
                          v-model="LastName"
                          required
                          :rules="nameRules"
                          color="secondary"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Contact Number*"
                          persistent-hint
                          :rules="phoneRules"
                          color="secondary"
                          required
                          v-model="PhoneNumber"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12"></v-col>
                      <v-col cols="12" sm="6">
                        <v-slider
                          v-model="Age"
                          :rules="rules.age"
                          color="orange"
                          label="Age*"
                          min="1"
                          max="100"
                          thumb-label
                        ></v-slider>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Bar', 'Fast Food', 'Casual Dining','Fine Dining']"
                          label="Restaurant Type"
                          v-model="RestaurantType"
                          multiple
                          color="secondary"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="dialog = false">Cancel</v-btn>
                  <v-btn
                    v-if="(this.name && this.LastName && this.PhoneNumber != null) && (this.Age > 16 && this.Age <= 90) && (this.RestaurantType.length > 0)"
                    color="secondary"
                    to="/Settings/MenuConfig"
                    @click="SaveUserData(name,PhoneNumber,LastName,Age)"
                  >Continue</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </v-row>
</template>
<script>
import Signup from "~/components/Signup.vue";
import { METHODS } from "http";
import { mapState } from "vuex";
export default {
  components: {
    Signup
  },
  data: () => ({
    dialog: false,
    loading: false,

    name: null,
    LastName: null,
    PhoneNumber: null,
    Age: 16,
    RestaurantType: [],
    valid: true,

    nameRules: [v => !!v || "Name is required"],
    select: null,
    e1: 0,

    email: null,
    phoneRules: [
      v => !!v || "Phone is required",
      v =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(v) ||
        "Phone must be valid"
    ],

    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    password: null,

    checkbox: false,
    form: Object.assign({}),
    rules: {
      age: [val => (val >= 14 && val <= 90) || "Be Honest"]
    }
  }),
  computed: {
    // ...mapState({
    //   message: state => state.user.email
    // })
  },
  methods: {
    updateMessage(e) {
      this.$store.commit("user/updateMessage", e);
    },
    SaveUserData(name, PhoneNumber, LastName, Age, RestaurantType) {
      let user = {
        Name: name,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        Age: Age,
        RestaurantType: RestaurantType
      };
      this.$store.commit("user/SaveUserData", user);
    },

    async createUser() {
      try {
        this.loading = true;
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        this.loading = false;
        alert("Account Created");
        this.$store.commit("user/updateMessage", this.email);
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>