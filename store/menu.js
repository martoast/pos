import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: [],

})

export const actions = {
  test({ commit }) {

    setTimeout(() => {
      console.log("action called")

      this.$fireAuth.onAuthStateChanged(function (user) {
        if (user) {


          // const messageRef = this.$fireStore.collection("users").doc(user.email);
          // const messageDoc = messageRef.get();
          // console.log(messageDoc.data());

          // var MenuItems = messageDoc.data().Menu;

          // commit("setMenu", MenuItems)



          console.log(user.email)


          // let menu = {
          //   name: "shit",
          //   price: 12,

          // }
          // commit("setMenu", menu)

        } else {
          // No user is signed in.
          // alert("no user is signed in...");
        }
      })


      // const messageRef = this.$fireStore.collection("users").doc("testing123@gmail.com");
      // const messageDoc = messageRef.get();
      // console.log(messageDoc.data().Menu);
      // let menu = messageDoc.data().Menu
      // commit("setMenu", menu)

    }, 1000)

  },

  fetchMenu({
    commit
  }) {
    menu.getMenu().then(response => {
      commit('menu/setMenu', response)
    })
  },
  POST_MENU({
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

}
export const getters = {
  getMenu(state) {

    // if (state.MenuItems === undefined || state.MenuItems.length == 0) {
    //   console.log("No Menu Created")
    //   return;
    // } else {
    //   this.$fireAuth.onAuthStateChanged(function (user) {
    //     if (user) {

    //       console.log(user.email);
    //       return state.MenuItems

    //     } else {
    //       // No user is signed in.
    //       alert("no user is signed in...");
    //     }
    //   });


    // }


  }

}

// const getItems = (state) => {
//   console.log("test")
//   return state.MenuItems;
// };

// export default {
//   getItems
// };