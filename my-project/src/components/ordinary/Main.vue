<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="color"
    >
      <v-toolbar-title>Rental Space</v-toolbar-title>
      <input type="text">
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
      <router-view></router-view>
        <v-row
          align="center"
          justify="center"
        >
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <Router />
    </v-footer>
  </v-app>
</template>

<script>
import Router from "./Router.vue";

  export default {
    data: () => ({
     color: 'rgb(95, 99, 104)',
    }),
    components: {
      Router,
    }
  }
</script>