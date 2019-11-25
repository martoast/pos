export const state = () => ({

  user: {
    email: "",
    Name: "",
    PhoneNumber: null,
    Age: null,
    LastName: ""

  }
})



export const mutations = {

  updateMessage(state, message) {
    state.user.email = message
  },
  SaveUserData(state, message) {
    state.user.name = message.name
    state.user.PhoneNumber = message.PhoneNumber
    state.user.Age = message.Age
    state.user.LastName = message.LastName

  }

}