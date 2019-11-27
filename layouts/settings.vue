<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      class="primary"
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
      class="secondary"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn
        icon
        @click.stop="leftDrawer = !leftDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      v-model="leftDrawer"
      :left="left"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-list-item-avatar>
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
    </v-navigation-drawer>
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
          icon: "mdi-weather-sunny",
          title: "Display",
          to: "/Settings/Display"
        },
        {
          icon: "mdi-book-open",
          title: "Menu Configuration",
          to: "/Settings/MenuConfig"
        },
        {
          icon: "mdi-credit-card",
          title: "Payment Option",
          to: "/Settings/PaymentOption"
        },
        {
          icon: "mdi-account",
          title: "Users",
          to: "/Settings/Users"
        },
        {
          icon: "mdi-account-key",
          title: "Permissions",
          to: "/Settings/Permissions"
        },
        {
          icon: "mdi-android",
          title: "Devices",
          to: "/Settings/Devices"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Restaurant Profile",
          to: "/Settings/RestaurantProfile"
        },
        {
          icon: "mdi-content-copy",
          title: "Printing",
          to: "/Settings/Printing"
        },
        {
          icon: "mdi-alarm-multiple",
          title: "Notifications",
          to: "/Settings/Notifications"
        }
      ],
      options: this.$store.state.NavOptions.options,
      left: true,
      leftDrawer: false,
      title: this.$route.path
    };
  }
  // created() {
  //   this.$fireAuth.onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.

  //       var email = user.email;

  //       var uid = user.uid;
  //       console.log(email);
  //     } else {
  //       // User is signed out.
  //       // ...
  //       console.log("No user  ");
  //     }
  //   });
  // }
};
</script>