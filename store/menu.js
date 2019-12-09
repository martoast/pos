import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: [],

})

export const actions = {
  GET_FIREMENU({ commit }) {

    setTimeout(() => {
      console.log("action called")

      this.$fireAuth.onAuthStateChanged(function (user) {
        if (user) {


          const messageRef = this.$fireStore.collection("users").doc(user.email);
          const messageDoc = messageRef.get();
          console.log(messageDoc.data());

          var MenuItems = messageDoc.data().Menu;

          commit("setMenu", MenuItems)



          console.log(user.email)


          // let menu = {
          //   name: "shit",
          //   price: 12,

          // }
          // commit("setMenu", menu)

        } else {
          // No user is signed in.
          alert("no user is signed in...");
        }
      })


      // const messageRef = this.$fireStore.collection("users").doc("testing123@gmail.com");
      // const messageDoc = messageRef.get();
      // console.log(messageDoc.data().Menu);
      // let menu = messageDoc.data().Menu
      // commit("setMenu", menu)

    }, 1000)

  },

  POST_MENU() {
    this.$fireAuth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        alert(`Logged in with ${user.email}`);
        console.log(user.email);
        app.$fireStore
          .collection("users")
          .doc(user.email)
          .set({ Menu: this.$store.state["menu/MenuItems"] });
      } else {
        // No user is signed in.
        console.log("Only Registered Users can save a Menu.");
      }
    });

  },


  SAVE_MENU({
    commit
  }) {
    this.$store.state["menu/MenuItems"].then(response => {
      commit('setMenu', response)
    })
  }

}



export const mutations = {
  setMenu(state, MenuItems) {
    state.MenuItems = MenuItems
    console.log("SetMenu Success")

  },

  decrementProductInventory(state, { id }) {
    const item = state.MenuItems.find(item => item.id === id)
    item.inventory--
  },
  add(state, MenuItems) {
    this.self = this
    state.MenuItems.push(MenuItems)
    console.log(state.MenuItems)
  },
  remove(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
  },
  edit(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
    state.MenuItems.push(item)
  },
  EDIT_CASE(state, payload) {
    const item = state.objects.find(item => item.id === payload.recordId);
    Object.assign(item, payload);
  }

}


// const getItems = (state) => {
//   console.log("test")
//   return state.MenuItems;
// };

// export default {
//   getItems
// };