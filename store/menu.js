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

}



export const mutations = {

  decrementProductInventory(state, { id }) {
    const item = state.MenuItems.find(item => item.id === id)
    item.inventory--
  },
  add(state, MenuItems) {
    this.self = this
    state.MenuItems.push(MenuItems)
  },
  remove(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
  },

}
export const getters = {
  getMenu(state) {
    console.log("shit")
    console.log(state.MenuItems)
    return state.MenuItems
  }

}

// const getItems = (state) => {
//   console.log("test")
//   return state.MenuItems;
// };

// export default {
//   getItems
// };