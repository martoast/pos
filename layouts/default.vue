<template>
  <v-app light>
    <v-container class="primary">
      <v-app-bar :clipped-left="clipped" class="secondary" fixed app>
        <v-btn icon @click.stop="leftDrawer = !leftDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>// Main Navigation card
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
      <v-navigation-drawer
        class="primary"
        v-model="drawer"
        :clipped="clipped"
        width="445"
        absolute
        permanent
        right
        app
      >
        <v-card width="450" max-height="1000" class="mx-auto">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Item</th>
                  <th class="text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ShoppingCart" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>${{ item.price }}</td>
                </tr>
                <tr>
                  <td>tax: 13%</td>
                </tr>
              </tbody>
              <tr>
                <v-divider></v-divider>
              </tr>

              <tfoot>
                <tr>
                  <h4>Total: ${{total}}</h4>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
        </v-card>
      </v-navigation-drawer>

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
          icon: "mdi-chart-bubble",
          title: "Invoice",
          to: "/Invoice"
        },
        {
          icon: "mdi-apps",
          title: "Settings",
          to: "/Settings/Display"
        }
      ],
      left: true,

      leftDrawer: false,
      title: this.$route.path,
      ShoppingCart: [
        {
          name: "Frozen Yogurt",
          price: 9.95
        },
        {
          name: "Ice cream sandwich",
          price: 5.95
        },
        {
          name: "Eclair",
          price: 13.95
        }
      ],
      total: ""
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      console.log(data + " emitted");
      this.total = data;
    });
  },
  computed: {
    CartTotal() {}
  }
};
</script>
