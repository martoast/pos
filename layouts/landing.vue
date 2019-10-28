<template>
  <div>
    <v-app>

      <v-app-bar
        app
        color="indigo"
      >

        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            text
            to="/users/Login"
          >Log in</v-btn>
          <v-btn
            text
            to="/users/Signup"
          >Register</v-btn>

        </v-toolbar-items>

      </v-app-bar>
      <Nuxt />

      <v-footer
        color="indigo"
        app
      >

        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>
