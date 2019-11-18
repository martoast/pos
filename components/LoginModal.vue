<template>
  <div>

    <v-row
      align="center"
      justify="center"
    >

      <v-card
        class="elevation-12"
        width="400"
      >
        <v-toolbar
          color="secondary"
          dark
          flat
        >
          <v-toolbar-title>Login</v-toolbar-title>

        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              name="email"
              v-model="email"
              type="text"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              v-model="password"
              name="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            @click="loginUser(email,password)"
          >Login</v-btn>
        </v-card-actions>
      </v-card>

    </v-row>

  </div>

</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async loginUser(email, password) {
      if (email && password) {
        try {
          await this.$fireAuth.signInWithEmailAndPassword(email, password).then(
            this.$fireAuth.onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                alert(`Logged in with ${user.email}`);
                $nuxt._router.push("/Register");

                // this.$router.push("/user/" + this.userId);
              } else {
                // No user is signed in.
                alert("no user is signed in...");
              }
            })
          );
        } catch (e) {
          alert(e);
        } finally {
          console.log("success");
        }
      } else {
        //make button different color green
      }
    }
  }
};
</script>