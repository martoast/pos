<template>
  <v-card>
    <v-row align="center">
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-col cols="12">
            <v-text-field
              label="Email*"
              required
              v-model="email"
              :rules="emailRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">

            <v-text-field
              v-model="password"
              :counter="10"
              :rules="nameRules"
              label="Password*"
              required
            ></v-text-field>
          </v-col>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
          <small>*indicates required field</small>

          <!-- <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="createUser"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn> -->

        </v-form>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="dialog = false"
      >Cancel</v-btn>
      <v-btn
        :disabled="!valid"
        color="secondary"
        @click="createUser()"
        to="/Register/"
      >
        Create Account
      </v-btn>

    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  layout: "landing",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    password: null,

    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        console.log(this.name);
      }
    },
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        alert("Account Created, Please Log in");
      } catch (e) {
        alert(e);
      }
    },
    reset() {
      this.resetValidation();
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>