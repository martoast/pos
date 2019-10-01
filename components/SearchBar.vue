<template>
  <v-layout justify-center>
    <v-toolbar
      class="primary"
      max-width="750"
    >

      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
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
      states: []
    };
  },
  created() {
    this.$nuxt.$on("ItemName", data => {
      this.states = data;
      console.log(this.states);
    });
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