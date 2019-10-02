<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="800"
    >
      <v-container fluid>
        <h2>Brightness</h2>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="brightness"
              inverse-label
              label="Brightness"
              value="30"
              color="purple"
            ></v-slider>
          </v-col>
        </v-row>
        <hr />
      </v-container>

      <v-container fluid>
        <h2>Language</h2>
        <h3>{{language}}</h3>
        <v-radio-group column>
          <v-radio
            v-model="language"
            label="English"
            value="english"
          ></v-radio>
          <v-radio
            v-model="language"
            label="Spanish"
            value="spanish"
          ></v-radio>
          <v-radio
            v-model="language"
            label="Korean"
            value="korean"
          ></v-radio>
        </v-radio-group>
        <hr />
        <h2>Font</h2>
        <v-radio-group column>
          <v-radio
            v-model="font"
            label="Small"
            value="small"
          ></v-radio>
          <v-radio
            v-model="font"
            label="Medium"
            value="medium"
          ></v-radio>
          <v-radio
            v-model="font"
            label="Large"
            value="large"
          ></v-radio>
        </v-radio-group>
        <hr />
        <h2>Time Displayed</h2>
        <v-radio-group>
          <v-radio
            v-model="timedisplay"
            label="24-hr Format"
            value="24"
          ></v-radio>
          <v-radio
            v-model="timedisplay"
            label="12- hr Format"
            value="12"
          ></v-radio>
        </v-radio-group>
      </v-container>
      <hr />
      <h2>Items Displayed</h2>
      <v-radio-group column>
        <v-radio
          v-model="displayitems"
          label="20"
          value="20"
        ></v-radio>
        <v-radio
          v-model="displayitems"
          label="40"
          value="40"
        ></v-radio>
        <v-radio
          v-model="displayitems"
          label="50"
          value="50"
        ></v-radio>
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
      language: "",
      timedisplay: null,
      displayitems: null,
      brightness: 25
    };
  }
};
</script>
<style scoped>
.center {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>