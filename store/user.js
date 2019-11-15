export const state = () => ({
  MenuItems: [],
  user: {
    Email: "",

  }
})

export const mutations = {
  add(state, text) {
    state.MenuItems.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.MenuItems.splice(state.MenuItems.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}