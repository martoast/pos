<template>
  <v-app light>
    <v-container class="primary">
      // Main Navigation card
      <v-navigation-drawer
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        v-model="leftDrawer"
        :left="left"
        temporary
        fixed
        app
      >
        <v-list>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            />
          </v-avatar>
          <v-list-item-title class="title">Alex POS</v-list-item-title>
          <v-divider></v-divider>
          <v-list-item
            v-for="option in options"
            :key="option.title"
            link
            :to="option.to"
            router
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ option.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ option.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="clipped"
        class="secondary"
        fixed
      >
        <v-btn
          icon
          @click.stop="leftDrawer = !leftDrawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-container>
          <div>
            <v-tabs
              fixed-tabs
              background-color="#1b50aa"
              dark
            >
              <v-tab to="/OrderQueue/OnlineOrders">Online Orders</v-tab>
              <v-tab to="/OrderQueue/InKitchen">In Kitchen</v-tab>
              <v-tab to="/OrderQueue/ReadytoGo">Ready to-GO</v-tab>
            </v-tabs>
          </div>

        </v-container>

      </v-app-bar>

    </v-container>

    <nuxt />

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      Maindrawer: true,
      drawer: true,
      fixed: false,

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
      left: true,

      leftDrawer: false,
      title: this.$route.path
    };
  }
};
</script>
