<template>
  <div>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->

      <v-container fluid>
        <!-- If using vue-router -->
        <SearchBar full-width="600" />
        <Food />
        <router-view></router-view>
      </v-container>
    </v-content>

  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar.vue";
import Food from "~/components/MenuItems/Food.vue";

export default {
  components: {
    SearchBar,
    Food
  },
  data() {
    return {
      states: []
    };
  }
};
</script>
