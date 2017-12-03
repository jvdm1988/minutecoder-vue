<template>
  <div id="select">
<<<<<<< HEAD
    <router-link
      class="language-button"
      to="/dashboard"
      v-for="language in languages"
      :key="language">

      <div class="language">
        {{language}}
      </div>

    </router-link>
=======
    <router-link to="/dashboard" v-for="language in languages" @click.native="select(language)" :key="language">{{language}}</router-link>
>>>>>>> 29cb9459a481b0801b9fc483ef30742abebf94d7
  </div>
</template>

<script>
  import store from 'store';

  import * as codeMutations from 'store/code/mutations/const';

  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        languages: ['Javascript', 'Ruby']
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
