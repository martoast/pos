<template>
  <div>
    <v-navigation-drawer
      class="light"
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clipped: true,
      items: [
        {
          icon: 'mdi-food',
          title: 'Food',
          to: '/Register'
        },
        {
          icon: 'mdi-beer',
          title: 'Drinks',
          to: '/drinksmenu'
        },
        {
          icon: 'mdi-food',
          title: 'Desserts',
          to: '/DessertsMenu'
        }
      ],
      drawer: true
    }
  }
}
</script>
