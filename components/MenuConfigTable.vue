<template>
  <div>
    <pre>
      {{MenuItems}}
    </pre>
    <v-simple-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in MenuItems"
          :key="item.name"
          @click="DeleteItem(item)"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </v-simple-table>

  </div>

</template>
<script>
export default {
  data() {
    return {
      // MenuItems: this.$store.state["menu/MenuItems"]
      // MenuItems: [
      //   {
      //     name: "shit",
      //     price: 2.99,
      //     Type: "Food",
      //     modifiers: null,
      //     itemID: "sdf2345r"
      //   }
      // ]
    };
  },
  created() {},
  computed: {
    MenuItems() {
      return this.$store.getters["menu/getMenu"];
    }
  },
  mounted() {},
  methods: {
    DeleteItem(item) {
      console.log("deleting item...");
      this.$store.commit("menu/remove", item);
    }
  }
};
</script>