<template>
  <div>
    <div>
      <v-item-group multiple>
        <v-container>
          <v-row>
            <v-col
              v-for="Modifier in FoodModifiers"
              :key="Modifier.name"
              cols="12"
              md="4"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? 'secondary' : ''"
                  class="rounded-card"
                  dark
                  height="200"
                  @click="AddModifierToList(Modifier)"
                >
                  <v-list-item-title class="headline mb-1">{{Modifier.name}}</v-list-item-title>
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
    </div>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="blue darken-1"
        text
        @click="SendModifiers"
      >Close</v-btn>
      <v-btn
        color="blue darken-1"
        text
        @click="SendModifiers"
      >Save</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModifierList: [],
      dialog: false
    };
  },
  props: ["FoodModifiers"],

  methods: {
    AddModifierToList(Modifier) {
      this.ModifierList.push(Modifier);
      console.log(this.ModifierList);
    },
    SendModifiers() {
      this.$nuxt.$emit("test2", this.ModifierList);
      this.$nuxt.$emit("test3", this.dialog);
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