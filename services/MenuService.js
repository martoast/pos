const MenuItems = [

]
export default {
  async getMenu() {
    // var user = this.$fireAuth.currentUser;
    // const promise = this.$fireStore.collection('users').doc("oscar@gmail.com")
    // promise.then(snapshot => {
    //   // handle the document snapshot here
    //   MenuItems.push(snapshot)
    // })
    //   .catch(error => {
    //     // handle any errors here
    //     console.log(error)
    //   });
    const menu = {
      name: "shit",
      price: 100
    }

    MenuItems.push(menu)
    // console.log(MenuItems)

    // const firebaseMenu = this.$fireStore.collection('users').doc("oscar@gmail.com").get()
    // MenuItems.push(firebaseMenu)


    return MenuItems





  },


}
