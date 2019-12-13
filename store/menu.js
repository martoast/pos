import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: [],

})

export const actions = {

  async GET_FIREMENU({ commit }, email) {
    console.log("GET_FIREMENU fired")

    console.log(email)
    const messageRef = this.$fireStore.collection('users').doc(email)
    try {
      const messageDoc = await messageRef.get()
      var MenuItems = messageDoc.data().menu;

      console.log(MenuItems)

      commit("setMenu", MenuItems)

    } catch (e) {
      alert(e)
      return
    }


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
    console.log("deleted menu item")
  },
  edit(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
    state.MenuItems.push(item)
  },


}
export const getters = {
  getMenu(state) {


    if (state.MenuItems === undefined || state.MenuItems.length == 0) {
      console.log("No Menu Created")
      return;
    } else {
      return state.MenuItems
    }

  },
  GetFoodMenu(state) {
    if (state.MenuItems === undefined || state.MenuItems.length == 0) {
      console.log("No Menu Created")
      return;

    } else {
      return state.MenuItems.filter(item => item.type = "Food")
    }

  }

}


// const getItems = (state) => {
//   console.log("test")
//   return state.MenuItems;
// };

// export default {
//   getItems
// };