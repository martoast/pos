export const state = () => ({
  options: [
    {
      icon: "mdi-relative-scale",
      title: "Sales Register",
      to: "/Register"
    },

    {
      icon: "mdi-database",
      title: "Order Queue",
      to: "/OrderQueue/OnlineOrders"
    },

    {
      icon: "mdi-settings",
      title: "Menu Configuration",
      to: "/Settings/MenuConfig"
    }
  ],
})