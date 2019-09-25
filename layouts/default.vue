<template>
  <v-app light>
    <v-container class="primary">
      <v-app-bar
        :clipped-left="clipped"
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
      </v-navigation-drawer>// Menu Navigation card shit
      <v-navigation-drawer
        class="primary"
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
      <v-navigation-drawer
        class="primary"
        width="445"
        absolute
        permanent
        right
        app
      >

        <v-card
          width="450"
          max-height="1000"
          class="mx-auto"
          :elevation="5"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Item</th>
                  <th class="text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in testList"
                  :key="item.name"
                >
                  <td @click="DeleteItem(item)">{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                </tr>
                <tr v-if="items.length">
                  <td>tax: 13%</td>
                </tr>
              </tbody>
              <tr>
                <v-divider></v-divider>
              </tr>

              <tfoot>
                <tr>
                  <h4 v-if="items.length">Total: {{CartTotal}}</h4>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
        </v-card>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>CheckOut</v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <nuxt />
    </v-container>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; Alex Martos</span>
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
          icon: "mdi-food",
          title: "Food",
          to: "/"
        },
        {
          icon: "mdi-beer",
          title: "Drinks",
          to: "/drinksmenu"
        },
        {
          icon: "mdi-food",
          title: "Desserts",
          to: "/DessertsMenu"
        }
      ],
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
      title: this.$route.path,

      total: "",
      testList: []
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      // console.log(data + " emitted");
      // this.total = data;
      this.testList.push(data);
      console.log(this.testList);
    });
  },
  methods: {
    DeleteItem(item) {
      this.testList.splice(item, 1);
    }
  },
  computed: {
    CartTotal() {
      return this.testList.reduce((acc, item) => acc + item.price, 0);
    }
  }
};
</script>
