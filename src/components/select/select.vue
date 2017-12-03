<template>
  <div id="select">
    <router-link to="/dashboard" v-for="language in languages" :key="language">{{language}}</router-link>
  </div>
</template>

<script>
  import store from 'store';

  import * as codeGetters from 'store/code/getters/const';
  import * as codeMutations from 'store/code/mutations/const';
  import * as codeActions from 'store/code/actions/const';
  import { mapActions, mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        languages: ['javascript', 'ruby']
      };
    }
  }
</script>

<style lang="sass">

</style>
