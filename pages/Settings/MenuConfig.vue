<template>
  <div>
    <v-card>
      <v-card-title>Menu Configuration</v-card-title>
      <v-spacer></v-spacer>

      <MenuTable :MenuItems="MenuItems" />

      <v-card-actions>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="6"
          >
            <ItemCreateModal />
          </v-col>

          <v-btn
            class="secondary"
            @click="writeToFirestore()"
          >Save Menu</v-btn>
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
    return {};
  },
  created() {
    const vm = this;

    vm.$fireAuth.onAuthStateChanged(async function(user) {
      if (user) {
        try {
          const messageRef = vm.$fireStore.collection("users").doc(user.email);

          await messageRef
            .get()
            .then(function(doc) {
              if (doc.exists) {
                console.log(doc.data().menu);
                let FullMenu = doc.data().menu;
                vm.$store.commit("menu/setMenu", FullMenu);
              } else {
                // doc.data() will be undefined in this case
                console.log("No menu has been created!");
              }
            })
            .catch(function(error) {
              console.log("Error getting document:", error);
            });
        } catch (e) {
          alert(e);
          return;
        }
      } else {
        // No user is signed in.
        console.log("No User logged in");
      }
    });
  },
  computed: {
    // email() {
    //   return this.$store.getters["user/EmailGetter"];
    // },
    MenuItems: {
      get() {
        return this.$store.getters["menu/getMenu"];
      },
      set(value) {
        this.$store.commit("menu/setMenu", value);
      }
    }
  },

  methods: {
    async writeToFirestore() {
      let email = this.email;
      let menu = this.MenuItems;
      // console.log(email);
      // console.log(menu);
      const messageRef = this.$fireStore.collection("users").doc(email);
      try {
        await messageRef.set({
          menu: menu
        });
      } catch (e) {
        alert(e);
        return;
      }
      alert("Menu Changes Saved");
    }
  }
};
</script>
