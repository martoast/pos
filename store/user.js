export const state = () => ({

  user: {
    email: "",
    Name: "",
    PhoneNumber: null,
    Age: null,
    LastName: ""

  }
})

export const actions = {
  GET_EMAIL({ commit }) {
    this.$fireAuth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email)
        console.log("Action GET_EMAIL Fired")
        commit("SaveEmail", user.email)

      } else {
        // No user is signed in.
        console.log('No User logged in')
      }
    })
  }
}


export const mutations = {

  updateMessage(state, message) {
    state.user.email = message
  },
  SaveUserData(state, message) {
    state.user.name = message.name
    state.user.PhoneNumber = message.PhoneNumber
    state.user.Age = message.Age
    state.user.LastName = message.LastName

  },
  SaveEmail(state, email) {
    state.user.email = email

  }

}
export const getters = {
  GetUserEmail() {


    // this.$fireAuth.onAuthStateChanged(function (user) {
    //   if (user) {
    //     console.log(user.email)
    //     return user.email
    //   } else {
    //     // No user is signed in.
    //     console.log('No User logged in')
    //   }
    // })

    // if (state.user.email) {
    //   console.log(state.user.email)
    //   return state.user.email
    // } else {
    //   console.log("No user signed in")

    //   return;
    // }

  }

}