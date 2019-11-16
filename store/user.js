export const state = () => ({
  MenuItems: null,
  user: {
    email: "",

  }
})



export const mutations = {
  add(state, MenuItems) {
    state.MenuItems = MenuItems
  },
  remove(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
  },
  updateMessage(state, message) {
    state.user.email = message


  }

}