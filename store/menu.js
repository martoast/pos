import menu from '~/services/MenuService'

export const state = () => ({
  MenuItems: [],
  user: {
    email: "",

  }
})

export const actions = {
  GETMENU({ commit }) {
    menu.getMenu(items => {
      commit('setMenu', items)
    })
  }

}



export const mutations = {
  setMenu(state, items) {
    state.MenuItems = items
  },

  decrementProductInventory(state, { id }) {
    const item = state.MenuItems.find(item => item.id === id)
    item.inventory--
  }

}
