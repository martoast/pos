<template>
  <div>
    <v-app>
      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->

        <v-container fluid>
          <!-- If using vue-router -->
          <!-- <SearchBar full-width="600" /> -->
          <Drinks />
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
import Drinks from '~/components/MenuItems/Drinks.vue'

export default {
  components: {
    Drinks
  }
}
</script>
