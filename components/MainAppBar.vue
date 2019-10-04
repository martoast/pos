<template>
  <div>
    <v-app-bar
      :clipped-left="clipped"
      height="80"
      class="secondary"
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="leftDrawer = !leftDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn
        icon
        @click.stop="dialog2 = true"
      >
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>

    </v-app-bar>
    <div>
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
    </div>
    <v-dialog v-model="dialog2">
      <v-card>
        <CreateOrder />
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import CreateOrder from "~/components/CreateOrder.vue";
export default {
  components: {
    CreateOrder
  },
  data() {
    return {
      dialog2: false,
      leftDrawer: false,
      options: this.$store.state.NavOptions.options,
      left: true,
      clipped: true,
      dialog: false
    };
  }
};
</script>