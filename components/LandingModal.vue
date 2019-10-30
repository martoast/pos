<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >Get Started</v-btn>
      </template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            color="secondary"
          >Basic info</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="e1 > 2"
            step="2"
            color="secondary"
          >Register</v-stepper-step>

          <v-divider></v-divider>

        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-card>
                <v-card-title>
                  <span class="headline">User Info</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal first name*"
                          required
                          :rules="nameRules"
                          v-model="name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal Last Name"
                          hint="not required"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Contact Number*"
                          persistent-hint
                          hint="(xxx)xxx-xxxx"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">

                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Restaurant Type"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >Close</v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="validate()"
                    to="/Register/"
                  >Save</v-btn> -->
                  <v-btn
                    text
                    @click="dialog = false"
                  >Cancel</v-btn>
                  <v-btn
                    color="secondary"
                    @click="e1 = 2"
                  >
                    Continue
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-form>

          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form>
              <v-card-title>
                <span class="headline">Create Account</span>
              </v-card-title>
              <Signup />
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
export default {
  components: {
    Signup
  },
  data: () => ({
    dialog: false,

    name: "",
    valid: true,
    name: "",

    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    select: null,
    e1: 0
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.name);
        this.dialog = false;
      }
    }
    // async createUser() {
    //   try {
    //     await this.$fireAuth.createUserWithEmailAndPassword(
    //       this.email,
    //       this.password
    //     );
    //   } catch (e) {
    //     alert(e);
    //   }
    //   this.dialog(false);
    // }
  }
};
</script>