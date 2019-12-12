export const state = () => ({
  Cart: [],
  Total: null

})

export const actions = {
  CalcTotal({ commit }) {
    console.log("CALC TOTAL ACTION CALLED ")
    if (state.Cart === undefined || state.Cart.length == 0) {
      console.log("test")
      console.log("No Items in cart")
      return;
    } else {
      // calculate sum of each order in cart list
      let Total = state.Cart.reduce(
        (acc, item) => acc + item.OrderTotal,
        0
      );
      console.log(Total)

      commit("SetTotal", Total)

    }

  },
  ADD_TO_CART({ commit }, Order) {
    commit("add", Order)
  }

}






export const mutations = {
  // setMenu(state, MenuItems) {
  //   state.MenuItems = MenuItems
  //   console.log("SetMenu Success")

  // },

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
  },
  SetTotal(state, Total) {
    state.Total = Total
    console.log(Total)

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
    return state.Total

  }

}
