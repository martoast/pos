export const state = () => ({
  Cart: [],


})

export const actions = {

  ADD_TO_CART({ commit }, Order) {
    commit("add", Order)
  },
  async SENDORDER(email) {
    console.log(email.rootState.user.user.email)

    // console.log(email)
    let EMAIL = email.rootState.user.user.email
    const messageRef = this.$fireStore.collection('users').doc(EMAIL)
    try {
      await messageRef.set({
        orders: state.Cart
      })
    } catch (e) {
      alert(e)
      return
    }
    alert('Success.')
  }

}






export const mutations = {


  // decrementProductInventory(state, { id }) {
  //   const item = state.MenuItems.find(item => item.id === id)
  //   item.inventory--
  // },
  add(state, Order) {
    this.self = this
    state.Cart.push(Order)
    // console.log(state.Cart)
  },
  remove(state, item) {
    console.log("item deleted...")
    state.Cart.splice(state.Cart.indexOf(item), 1)
  },
  ClearCart(state) {
    state.Cart = []
  }




}
export const getters = {
  getCart(state) {

    if (state.Cart === undefined || state.Cart.length == 0) {
      console.log("No Items in cart")
      return;
    } else {
      return state.Cart
    }

  },
  GetTotal(state) {
    if (state.Cart === undefined || state.Cart.length == 0) {
      console.log("test")
      console.log("No Items in cart")
      return
    } else {
      return state.Cart.reduce(
        (acc, item) => acc + parseFloat(item.OrderTotal),
        0
      );

    }


  }

}
