<template>
  <div id="app">
    <v-app>
      <app-header></app-header>

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>

      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
  import Header from 'components/header/header.vue'
  import Footer from 'components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .container {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
