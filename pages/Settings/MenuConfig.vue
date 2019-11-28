<template>
  <div>
    <v-card>

      <v-card-title>Create Your Menu!</v-card-title>
      <v-spacer></v-spacer>

      <MenuTable />

      <v-card-actions>
        <v-row justify="center">
          <ItemCreateModal />
          <v-btn
            class="secondary"
            @click="SaveMenu()"
          >
            Save Menu
          </v-btn>

        </v-row>

      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
import { mapMutations } from "vuex";
import MenuTable from "~/components/MenuConfigTable";
import ItemCreateModal from "~/components/ItemCreateModal";
export default {
  layout: "settings",
  components: {
    MenuTable,
    ItemCreateModal
  },
  data() {
    return {
      // MenuItems: null,
      // MenuItems: this.$store.state["menu/MenuItems"],
    };
  },
  created() {},

  methods: {
    SaveMenu() {
      // this.$fireAuth.onAuthStateChanged(function(user) {
      //   if (user) {
      //     // User is signed in.
      //     alert(`Logged in with ${user.email}`);
      //     console.log(user.email);
      //     this.$fireStore
      //       .collection("users")
      //       .doc(user.email)
      //       .set({ Menu: this.$store.state["menu/MenuItems"] });
      //   } else {
      //     // No user is signed in.
      //     console.log("Only Registered Users can save a Menu.");
      //   }
      // });
      // this.$store.dispatch("menu/POST_MENU");
    }
  }
};
</script>