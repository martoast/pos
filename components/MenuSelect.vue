<template>
  <v-card class="mx-auto" max-width="400">
    <v-list>
      <v-list-item-group v-model="model" mandatory color="indigo">
        <v-list-item v-for="(item, i) in items" :key="i">
          <nuxt-link to="/about">About</nuxt-link>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-wifi",
        text: "Food"
      },
      {
        icon: "mdi-bluetooth",
        text: "Drinks"
      },
      {
        icon: "mdi-chart-donut",
        text: "Dessert"
      }
    ],
    model: 1
  })
};
</script>