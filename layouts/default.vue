<template>
  <div>
    <div>
      <v-app light>
        <MainAppBar CartTotal="this.total" v-bind="this.MenuItems" />

        <MenuNav />

        <nuxt />

        <v-footer :fixed="fixed" app>
          <span>&copy; Alex Martos</span>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>
<script>
import MainAppBar from "~/components/MainAppBar.vue";
import MenuNav from "~/components/MenuNav.vue";
export default {
  components: {
    MainAppBar,
    MenuNav
  },
  data() {
    return {
      Maindrawer: true,
      clipped: true,
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

      title: this.$route.path,

      total: null,
      MenuItems: [],

      notifications: false,
      sound: true,
      widgets: false,

      calculator: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  created() {
    this.$nuxt.$on("test", data => {
      // console.log(data + " emitted");
      // this.total = data;
      this.MenuItems.push(data);
    });
  },
  methods: {
    DeleteItem(item) {
      this.MenuItems.splice(item, 1);
    }
  },
  computed: {
    CartTotal() {
      return this.MenuItems.reduce((acc, item) => acc + item.price, 0);
    }
  }
};
</script>
<style scoped>
.checkout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.center {
  justify-content: center;
  text-align: center;
  font-size: 2.5em;
}
.display {
  color: #a3a3a3;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: clip;
  margin-left: 20px;
}
</style>