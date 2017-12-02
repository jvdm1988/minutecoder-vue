<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
  import store from 'store';
  import * as authActions from 'store/auth/actions/const';
  import * as authGetters from 'store/auth/getters/const';
  import * as codeGetters from 'store/code/getters/const';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('auth', {
        email: authGetters.user
      }),
      ...mapGetters('code', {
        code: codeGetters.code
      })
    },
    methods: {
      ...mapActions('auth', {
        fetchUser: authActions.fetchUser
      })
    },
    created () {
      this.fetchUser();
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/highlight/solarized-dark.css';
  h1, p {
    text-align: center;
  }
  p {
    color: red;
  }
  .untouched {
    color: grey;
  }
  span[hljs-keyword] {
    color: grey !important;
  }
</style>
