<template>
  <div>
    <div>
      <v-card
        v-for="employee in employees"
        v-bind:key="employee.id"
        class="mx-auto"
        :flat="flat"
        :loading="loading"
        :outlined="outlined"
        :elevation="elevation"
        :raised="raised"
        :width="width"
        :height="height"
      >
        <v-card-title>{{employee.name}}</v-card-title>

        <v-card-text>{{employee.id}}</v-card-text>
        <v-card-actions v-if="actions">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn text to="employee.id">Click</v-btn>

          <v-btn outlined @click="tryme">Click</v-btn>
        </v-card-actions>
        <br />
      </v-card>
    </div>
    <div>
      <v-card
        class="mx-auto"
        :flat="flat"
        :loading="loading"
        :outlined="outlined"
        :elevation="elevation"
        :raised="raised"
        :width="width"
        :height2="height"
      >
        <v-card-title>Add Employee</v-card-title>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data: () => ({
    employees: {
      name: ["Alex", "Oscar", "Juan", "Nick"],
      id: [1337, 1231, 3523, 2351]
    },
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
      { name: "Joe", id: 1234, isActive: true }
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
    height2: 100
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