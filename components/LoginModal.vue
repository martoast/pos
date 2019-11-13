<template>
  <div>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="secondary"
              dark
              flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>

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
        </v-col>
      </v-row>
    </v-container>

  </div>

</template>

<script>
export default {
  layout: "landing",
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
                alert(`Logged in with ${user.uid}`);

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
          this.$router.push("/register/");
          console.log("success");
        }
      } else {
        //make button different color green
      }
    }
  }
};
</script>