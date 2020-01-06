<template>
  <div>
    <v-app>
      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->

        <v-container fluid>
          <!-- If using vue-router -->

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
import Desserts from "~/components/MenuItems/Desserts.vue";

export default {
  components: {
    Desserts
  }
};
</script>
