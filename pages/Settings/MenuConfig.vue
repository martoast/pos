<template>
  <div>
    <v-card>
      <v-card-title>Menu Configuration</v-card-title>
      <v-spacer></v-spacer>

      <MenuTable />

      <v-card-actions>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6" class="d-flex">
            <ItemCreateModal />
          </v-col>

          <v-btn class="secondary" @click="writeToFirestore()">
            Save Menu
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import MenuTable from '~/components/MenuConfigTable'
import ItemCreateModal from '~/components/ItemCreateModal'
export default {
  layout: 'settings',
  components: {
    MenuTable,
    ItemCreateModal
  },
  data() {
    return {
      // email: this.$store.getters['user/GetUserEmail'],
      MenuItems: this.$store.state['menu/MenuItems']
    }
  },
  created() {},
  computed: {
    // email() {
    //   this.$fireAuth.onAuthStateChanged(function(user) {
    //     if (user) {
    //       console.log(user.email)
    //       return user.email
    //     } else {
    //       // No user is signed in.
    //       console.log('No User logged in')
    //     }
    //   })
    // }
  },

  methods: {
    SaveMenu() {
      // this.$fireAuth.onAuthStateChanged(function(user) {
      //   if (user) {
      //     // User is signed in.
      //     alert(`Logged in with ${user.email}`);
      //     console.log(user.email);
      //     // app.$fireStore
      //     //   .collection("users")
      //     //   .doc(user.email)
      //     //   .set({ Menu: this.MenuItems });
      //     this.$fireStore
      //       .collection("users")
      //       .doc(user.email)
      //       .set({ Menu: this.MenuItems });
      //   } else {
      //     // No user is signed in.
      //     console.log("Only Registered Users can save a Menu.");
      //   }
      // });
      this.$store.dispatch('menu/POST_MENU')
    },
    writeToFirestore() {
      const messageRef = this.$fireStore.collection('users').doc(this.email)
      try {
        messageRef.set({
          // message: this.$store.state['menu/MenuItems']
          menu: this.MenuItems
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    }
  }
}
</script>
