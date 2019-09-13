<template>
  <div>
    <v-app>
      <SearchBar full-width="1260" />

      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->

        <v-container fluid>
          <!-- If using vue-router -->
          <Desserts />
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Receipt from "~/components/Receipt.vue";
import SearchBar from "~/components/SearchBar.vue";
import Desserts from "~/components/MenuItems/Desserts.vue";
import MenuSelect from "~/components/MenuSelect.vue";

export default {
  components: {
    SearchBar,
    Desserts,
    Receipt,
    MenuSelect
  }
};
</script>
