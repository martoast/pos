export const state = () => ({

  user: {
    email: "",

  }
})



export const mutations = {

  updateMessage(state, message) {
    state.user.email = message


  }

}