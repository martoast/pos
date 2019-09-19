<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-card
      class="mx-auto"
      height="400"
      width="256"
    >
      <v-navigation-drawer
        class="deep-purple accent-4"
        dark
        v-model="rightDrawer"
        :right="right"
        temporary
        fixed
      >
        <v-list>
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
    </v-card>
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
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Display",
          to: "/Settings/Display"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Payment Option",
          to: "/Settings/PaymentOption"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Users",
          to: "/Settings/Users"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Permissions",
          to: "/Settings/Permissions"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Devices",
          to: "/Settings/Devices"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Restaurant Profile",
          to: "/Settings/RestaurantProfile"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Printing",
          to: "/Settings/Printing"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Notifications",
          to: "/Settings/Notifications"
        }
      ],
      options: [
        {
          icon: "mdi-apps",
          title: "Menu",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "shit",
          to: "/drinksmenu"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Desserts",
          to: "/DessertsMenu"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: this.$route.path
    };
  }
};
</script>