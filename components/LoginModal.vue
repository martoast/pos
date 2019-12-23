<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="450px">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="white--text">iniciar sesión</v-btn>
        </template>

        <v-card class="elevation-12">
          <v-toolbar color="secondary" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                v-model="email"
                type="text"
                color="secondary"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                v-model="password"
                name="password"
                type="password"
                color="secondary"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" class="primary" @click="loginUser(email, password)">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      dialog: false
    };
  },
  methods: {
    async loginUser(email, password) {
      if (email && password) {
        try {
          await this.$fireAuth.signInWithEmailAndPassword(email, password);

          // this.$fireAuth.onAuthStateChanged(function(user) {
          //   if (user) {
          //     // User is signed in.
          //     alert(`Logged in with ${user.email}`)
          //     $nuxt._router.push('/Register')

          //     // this.$router.push("/user/" + this.userId);
          //   } else {
          //     // No user is signed in.
          //     alert('no user is signed in...')
          //   }
          // })
        } catch (e) {
          alert(e);
        } finally {
          console.log("success");
          $nuxt._router.push("/Register");
        }
      } else {
        //make button different color green
      }
    }
  }
};
</script>
