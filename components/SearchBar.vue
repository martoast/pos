<template>
  <v-layout justify-center>
    <v-toolbar width="700">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        flat
        hide-no-data
        hide-details
        label="Search Menu"
        solo-inverted
      ></v-autocomplete>
    </v-toolbar>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [],
      Fooditems: this.$store.state.MenuItems.Food
    };
  },
  created() {
    for (this.items in this.Fooditems) {
      this.states.push(this.item);
    }
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>