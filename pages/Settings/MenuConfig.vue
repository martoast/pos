<template>
  <div>
    <v-card>
      <v-card-title>Menu Configuration</v-card-title>
      <v-spacer></v-spacer>

      <MenuTable />

      <v-card-actions>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="6"
            class="d-flex"
          >
            <ItemCreateModal />
          </v-col>

          <v-btn
            class="secondary"
            @click="writeToFirestore()"
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
      email: null,
      TestMenu: {
        name: "shit",
        price: 12.23
      }
    };
  },
  created() {
    this.email = this.$store.dispatch("user/GET_EMAIL");
  },
  computed: {},

  methods: {
    async writeToFirestore() {
      let email = this.email;
      const messageRef = this.$fireStore.collection("users").doc(email);
      try {
        await messageRef.set({
          menu: this.$store.getters("menu/getMenu")
        });
      } catch (e) {
        alert(e);
        return;
      }
      alert("Success.");
    }
  }
};
</script>
