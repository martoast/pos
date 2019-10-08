<template>
  <div>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->

      <v-container fluid>
        <!-- If using vue-router -->

        <Food />
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Food from "~/components/MenuItems/Food.vue";

export default {
  components: {
    Food
  }
};
</script>
