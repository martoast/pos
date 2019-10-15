<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="modifier in FoodModifiers"
          :key="modifier.name"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'secondary' : ''"
              class="rounded-card"
              dark
              height="200"
              @click="handleModifiers(modifier)"
            >
              <v-list-item-title class="headline mb-1">{{modifier.name}}</v-list-item-title>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  props: ["FoodModifiers"],

  methods: {
    handleModifiers(modifier) {
      this.$nuxt.$emit("test2", modifier);
    }
  }
};
</script>
<style scoped>
.rounded-card {
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
html,
body,
#app,
section.section {
  height: 100%;
  width: 80%;
}

section.section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>