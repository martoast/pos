<template>
  <div>
    <v-card>
      <v-card-title>Menu Configuration</v-card-title>
      <v-spacer></v-spacer>

      <MenuTable
        :MenuItems="MenuItems"
        :email="email"
      />

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
    this.$store.dispatch("user/GET_EMAIL");
    // this.email = this.$store.getters["user/EmailGetter"];
  },
  computed: {
    email() {
      return this.$store.getters["user/EmailGetter"];
    },
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
