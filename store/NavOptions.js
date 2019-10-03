export const state = () => ({
  options: [
    {
      icon: "mdi-relative-scale",
      title: "Sales Register",
      to: "/"
    },
    {
      icon: "mdi-cash-usd",
      title: "Cash Drawer",
      to: "/CashDrawer"
    },
    {
      icon: "mdi-database",
      title: "Order Queue",
      to: "/OrderQueue/OnlineOrders"
    },
    {
      icon: "mdi-phone-incoming",
      title: "Calls",
      to: "/Calls"
    },
    {
      icon: "mdi-chart-line",
      title: "Transactions",
      to: "/Transactions"
    },
    {
      icon: "mdi-bank",
      title: "Business Dashboard",
      to: "/BusinessDash"
    },
    {
      icon: "mdi-chart-bubble",
      title: "Invoice",
      to: "/Invoice"
    },
    {
      icon: "mdi-settings",
      title: "Settings",
      to: "/Settings/Display"
    }
  ],
})