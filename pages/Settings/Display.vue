<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-container fluid>
        <h2>Brightness</h2>
        <v-row>
          <v-col cols="12">
            <v-slider inverse-label label="Brightness" value="30"></v-slider>
          </v-col>
        </v-row>
        <hr />
      </v-container>

      <v-container fluid>
        <h2>Language</h2>
        <v-radio-group v-model="language" column>
          <v-radio label="English" value="english"></v-radio>
          <v-radio label="Spanish" value="spanish"></v-radio>
          <v-radio label="Korean" value="korean"></v-radio>
        </v-radio-group>
        <hr />
        <h2>Font</h2>
        <v-radio-group v-model="font" column>
          <v-radio label="Small" value="small"></v-radio>
          <v-radio label="Medium" value="medium"></v-radio>
          <v-radio label="Large" value="large"></v-radio>
        </v-radio-group>
        <hr />
        <h2>Time Displayed</h2>
        <v-radio-group v-model="timedisplay" column>
          <v-radio label="24-hr Format" value="24"></v-radio>
          <v-radio label="12- hr Format" value="12"></v-radio>
        </v-radio-group>
      </v-container>
      <hr />
      <h2>Items Displayed</h2>
      <v-radio-group v-model="displayitems" column>
        <v-radio label="20" value="20"></v-radio>
        <v-radio label="40" value="40"></v-radio>
        <v-radio label="50" value="50"></v-radio>
      </v-radio-group>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "settings",
  data() {
    return {
      font: null,
      language: null,
      timedisplay: null,
      displatitems: null
    };
  }
};
</script>