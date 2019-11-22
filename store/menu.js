import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: null,

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
  setMenu(state, items) {
    console.log("test")
    state.MenuItems = items
    console.log(state.MenuItems)
  },

  decrementProductInventory(state, { id }) {
    const item = state.MenuItems.find(item => item.id === id)
    item.inventory--
  },
  add(state, MenuItems) {
    state.MenuItems = MenuItems
  },
  remove(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
  },

}
export const getters = {
  getMenu(state) {
    return state.MenuItems
  }
}
