<template>
  <div>
    <v-app>

      <v-app-bar
        app
        color="indigo"
      >

        <v-toolbar-title class="white--text">Eazy POS</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            text
            @click.stop="dialog = true"
            class="white--text"
          >iniciar sesión</v-btn>
          <!-- <v-btn
            text
            to="/users/Signup"
          >Registrar Cuenta</v-btn> -->
          <v-dialog v-model="dialog">

            <LoginModal />

          </v-dialog>

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
<script>
import LoginModal from "~/components/LoginModal";
export default {
  components: {
    LoginModal
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
