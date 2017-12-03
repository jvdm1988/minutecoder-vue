<template>
  <div id="select">
    <router-link
      class="language-button"
      to="/dashboard"
      v-for="language in languages"
      :key="language">

      <div class="language">
        {{language}}
      </div>

    </router-link>
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
        languages: ['Javascript', 'Ruby']
      };
    }
  }
</script>

<style lang="sass">
  #select {
    margin: 50px;
  }

  .language {
    font-size: 18px;
    width: 400px;
    padding: 20px 30px;
    margin: 30px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 1px 3px #cccccc;
    border-left: 15px solid #fa923f;
  }

  .language:hover,
  .language:focus,
  .language:active {
    background-color: #016dba;
    color: #fff;
    -moz-transition: all 0.3s ease-in;
    /* WebKit */
    -webkit-transition: all 0.3s ease-in;
    /* Opera */
    -o-transition: all 0.3s ease-in;
    /* Standard */
    transition: all 0.3s ease-in;
  }

  #select a {
    color: #000;
    text-decoration: none;
  }
</style>
