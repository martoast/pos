export const state = () => ({
  MenuItems: [],
  user: {
    email: "",

  }
})



export const mutations = {
  add(state, text) {
    state.MenuItems.push(MenuItems)
  },
  remove(state, { item }) {
    state.MenuItems.splice(state.MenuItems.indexOf(item), 1)
  },
  updateMessage(state, message) {
    state.user.email = message


  }

}