<template>
  <div>
    <v-app>

      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->

        <v-container fluid>
          <!-- If using vue-router -->
          <SearchBar full-width="600" />
          <Desserts />

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

export default {
  components: {
    SearchBar,
    Desserts,
    Receipt
  }
};
</script>
