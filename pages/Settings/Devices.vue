<template>
  <div>
    <div>
      <v-card
        v-for="employee in employees"
        v-bind:key="employee"
        class="mx-auto"
        :flat="flat"
        :loading="loading"
        :outlined="outlined"
        :elevation="elevation"
        :raised="raised"
        :width="width"
        :height="height"
      >
        <v-card-title>{{employee}}</v-card-title>

        <v-card-text>I'm card text</v-card-text>
        <v-card-actions v-if="actions">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn text>Click</v-btn>
          <v-btn outlined>Click</v-btn>
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
        <v-card-title>Add Device</v-card-title>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data: () => ({
    employees: ["Device 1", "Device 2", "Device 3"],
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
  })
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
</style>