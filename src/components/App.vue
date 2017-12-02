<template>
  <div id="app">
    <v-app>
      <app-header></app-header>

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import Header from 'components/header/header.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
