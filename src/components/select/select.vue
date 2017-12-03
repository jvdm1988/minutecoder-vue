<template>
  <div id="select">
    <router-link to="/dashboard" v-for="language in languages" @click.native="select(language)" :key="language">{{language}}</router-link>
  </div>
</template>

<script>
  import store from 'store';

  import * as codeMutations from 'store/code/mutations/const';

  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        languages: ['javascript', 'ruby']
      };
    },
    methods: {
      ...mapMutations('code', {
        select: codeMutations.STORE_LANGUAGE
      })
    }
  }
</script>

<style lang="sass">

</style>
