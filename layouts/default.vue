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
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-list-item-title class="title">IN-N-OUT</v-list-item-title>
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
      </v-navigation-drawer>// Menu Navigation card shit
      <v-navigation-drawer class="primary" v-model="drawer" :clipped="clipped" fixed app>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" class="secondary" fixed app>
        <v-btn icon @click.stop="leftDrawer = !leftDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <nuxt />
    </v-container>

    <v-footer :fixed="fixed" app>
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
      items: [
        {
          icon: "mdi-apps",
          title: "Food",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Drinks",
          to: "/drinksmenu"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Desserts",
          to: "/DessertsMenu"
        }
      ],
      options: [
        {
          icon: "mdi-chart-bubble",
          title: "Sales Register",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Cash Drawer",
          to: "/CashDrawer"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Order Queue",
          to: "/OrderQueue/OnlineOrders"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Calls",
          to: "/Calls"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Transactions",
          to: "/Transactions"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Business Dashboard",
          to: "/BusinessDash"
        },
        {
          icon: "mdi-apps",
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
