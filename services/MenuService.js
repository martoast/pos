const MenuItems = [

]
export default {
  async getMenu() {
    var user = this.$fireAuth.currentUser;
    const messageRef = this.$fireStore.collection('users').doc(user.email)
    try {
      const messageDoc = await messageRef.get()
      MenuItems.push(messageDoc.data())
      console.log(MenuItems)
    } catch (e) {
      alert(e)
      return
    }
  }

}
