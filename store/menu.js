import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: [],

})

export const actions = {

  fetchMenu({
    commit
  }) {
    return menu.getMenu().then(response => {
      commit('setMenu', response)
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

    if (state.MenuItems === undefined || state.MenuItems.length == 0) {
      console.log("No Menu Created")
      return;
    } else {
      return state.MenuItems

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