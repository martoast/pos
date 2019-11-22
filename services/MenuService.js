const MenuItems = [

]
export default {
  async getMenu() {

    var user = this.$fireAuth.currentUser;
    if (user) {
      const messageRef = this.$fireStore.collection("users").doc(user.email);
      const messageDoc = await messageRef.get();
      console.log(messageDoc.data().Menu);
      menu = messageDoc.data().Menu
    } else {
      console.log("No user");
    }
    // const menu = {
    //   name: "shit",
    //   price: 100
    // }

    MenuItems.push(menu)
    // console.log(MenuItems)

    // const firebaseMenu = this.$fireStore.collection('users').doc("oscar@gmail.com").get()
    // MenuItems.push(firebaseMenu)


    return MenuItems





  },


}
