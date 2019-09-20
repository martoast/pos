<template>
  <div>
    <div>
      <v-row>
        <v-col
          v-for="Delivery in Deliveries"
          :key="Delivery.id"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Delivery</div>
                <v-list-item-title class="headline mb-1">Order ID: #{{Delivery.id}}</v-list-item-title>
                <v-list-item-subtitle>Order ID:{{Delivery.id}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon
                large
                color="teal darken-2"
              >mdi-email</v-icon>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <pre>
            {{Delivery.order}}
          </pre>

            <v-card-actions>
              <v-btn text>View Details</v-btn>
              <v-btn text>Ready To-Go</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </div>
    <div>
      <v-row>
        <v-col
          v-for="PickUp in PickUps"
          :key="PickUp.id"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">PickUp</div>
                <v-list-item-title class="headline mb-1">{{PickUp.name}}</v-list-item-title>
                <v-list-item-subtitle>Order ID:{{PickUp.id}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon
                large
                color="green darken-2"
              >mdi-domain</v-icon>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <pre>
            {{PickUp.order}}
          </pre>

            <v-card-actions>
              <v-btn text>View Details</v-btn>
              <v-btn text>Send to Kitchen</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </div>

</template>
<script>
export default {
  layout: "OrderQueue",
  components: {},
  data: () => ({
    Deliveries: [
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
      },
      {
        name: "Erick",
        id: "2134",
        order: [
          {
            item: "Salad",
            price: "7.95"
          },
          {
            item: "Pasta",
            price: "12.99"
          },
          {
            item: "soda",
            price: "3.99"
          }
        ]
      },
      {
        name: "Annette",
        id: "6345",
        order: [
          {
            item: "nachos",
            price: "7.99"
          },
          {
            item: "burger",
            price: "14.99"
          },
          {
            item: "soda",
            price: "5.99"
          }
        ]
      },
      {
        name: "Nick",
        id: "74356",
        order: [
          {
            item: "Cereal",
            price: "6.99"
          },
          {
            item: "buffalo wings",
            price: "14.99"
          },
          {
            item: "soda",
            price: "5.99"
          }
        ]
      }
    ],
    PickUps: [
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
      },
      {
        name: "Erick",
        id: "2134",
        order: [
          {
            item: "Salad",
            price: "7.95"
          },
          {
            item: "Pasta",
            price: "12.99"
          },
          {
            item: "soda",
            price: "3.99"
          }
        ]
      },
      {
        name: "Annette",
        id: "6345",
        order: [
          {
            item: "nachos",
            price: "7.99"
          },
          {
            item: "burger",
            price: "14.99"
          },
          {
            item: "soda",
            price: "5.99"
          }
        ]
      },
      {
        name: "Nick",
        id: "74356",
        order: [
          {
            item: "Cereal",
            price: "6.99"
          },
          {
            item: "buffalo wings",
            price: "14.99"
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
    tryme() {
      this.message = Date();
      console.log(this.message);
    }
  },
  computed: {}
};
</script>