<template>
  <div>
    <div>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <v-card
            v-for="employee in employees"
            v-bind:key="employee.id"
            max-width="344"
            class="mx-auto"
            :flat="flat"
            :loading="loading"
            :outlined="outlined"
            :elevation="elevation"
            :raised="raised"
            :to="'/Settings/user/' + employee.id"
            :items="alignmentsAvailable"
            @click="tryme"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{employee.name}}</v-list-item-title>
                <v-list-item-subtitle>ID: {{employee.id}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>

              <div class="flex-grow-1"></div>

            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </div>

  </div>
</template>
<script>
export default {
  layout: "settings",
  data: () => ({
    employees: [
      {
        name: "Alex",
        id: 1337,
        isActive: true
      },
      {
        name: "Nick",
        id: 1228,
        isActive: false
      },
      { name: "Joe", id: 1234, isActive: true },
      {
        name: "Alejandro",
        id: 3212,
        isActive: false
      },
      {
        name: "Nate",
        id: 9832,
        isActive: false
      },
      {
        name: "Sebastian",
        id: 4523,
        isActive: true
      },
      {
        name: "Erick",
        id: 4563,
        isActive: true
      },
      {
        name: "Angela",
        id: 9873,
        isActive: true
      }
    ],
    flat: false,
    media: false,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: false,
    width: 950,
    height: 150,
    height2: 100,
    justify: "center",
    alignment: "center",
    alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"]
  }),
  methods: {
    tryme() {
      this.message = Date();
      console.log(this.message);
    }
  }
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
</style>