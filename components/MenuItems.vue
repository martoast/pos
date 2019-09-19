<template>
  <div>
    <v-item-group multiple="true">
      <v-container>
        <v-row>
          <v-col
            v-for="n in MenuItems"
            :key="n"
            cols="12"
            md="4"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="150"
                @click="toggle"
              >
                {{n}}{{"----"}}{{price}}
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="display-3 flex-grow-1 text-center"
                  >Item Selected</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MenuItems: [
        "pizza",
        "burger",
        "hotdog",
        "taco",
        "carne - asada",
        "salad"
      ],
      price: "$9.99"
    };
  }
};
</script>