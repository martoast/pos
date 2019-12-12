export const state = () => ({
  Cart: [],

})

export const actions = {
  CalcTotal({ commit }) {
    if (state.Cart === undefined || state.Cart.length == 0) {
      console.log("No Items in cart")
      return;
    } else {
      // calculate sum of each order in cart list

    }

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
    console.log(state.Cart)
  },
  remove(state, { Order }) {
    state.Cart.splice(state.Cart.indexOf(Order), 1)
  },



}
export const getters = {
  getCart(state) {

    if (state.Cart === undefined || state.Cart.length == 0) {
      console.log("No Items in cart")
      return;
    } else {
      return state.Cart
    }

  }

}


// const getItems = (state) => {
//   console.log("test")
//   return state.MenuItems;
// };

// export default {
//   getItems
// };