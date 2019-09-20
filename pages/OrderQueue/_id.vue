<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-title>Order ID: #{{id}}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <div class="grey--text ml-4">{{date}}</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <pre>{{order}}</pre>

    <v-card-actions>
      <v-btn color="deep-purple accent-4" text @click="reserve">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  layout: "OrderQueue",
  data: () => ({
    loading: false,
    selection: 1,
    id: "1337",
    date: Date(),
    order: [
      {
        item: "bread sticks",
        price: "3.99"
      },
      {
        item: "pizza",
        price: "9.99"
      },
      {
        item: "soda",
        price: "5.99"
      }
    ],
    Item: [
      {
        name: "Alejandro",
        id: "1337",
        order: [
          {
            item: "bread sticks",
            price: "3.99"
          },
          {
            item: "pizza",
            price: "9.99"
          },
          {
            item: "soda",
            price: "5.99"
          }
        ]
      }
    ]
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>