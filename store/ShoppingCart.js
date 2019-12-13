export const state = () => ({
  Cart: [],


})

export const actions = {

  ADD_TO_CART({ commit }, Order) {
    commit("add", Order)
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
  remove(state, { Order }) {
    state.Cart.splice(state.Cart.indexOf(Order), 1)
    console.log("item deleted")
  },
  removeModifier(state, { FoodModifiers }) {
    state.Cart.splice(state.Cart.indexOf(FoodModifiers), 1)
    console.log("Modifier Deleted")
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
