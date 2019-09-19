<template>

  <v-app dark>
    // Menu Navigation card start
    <v-navigation-drawer
      v-model="drawer"
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

      <v-btn
        icon
        @click.stop="leftDrawer = !leftDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <nuxt />
    </v-container>

    // Main Navigation card
    <v-card
      class="mx-auto"
      height="400"
      width="256"
    >
      <v-navigation-drawer
        class="deep-purple accent-4"
        dark
        v-model="leftDrawer"
        :left="left"
        temporary
        fixed
        app
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
          icon: "mdi-apps",
          title: "Settings",
          to: "/Settings/Display"
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
      left: true,

      leftDrawer: false,
      title: this.$route.path
    };
  }
};
</script>
