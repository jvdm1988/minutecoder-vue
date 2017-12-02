<template>
  <div id="score">
    <h1>High Scores</h1>
    <table>
      <tr v-for="score in highscores">
        <th>{{score.username}}</th>
        <th>{{score.score}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  import store from 'store';

  import * as codeState from 'store/code/state/const';
  // import * as codeMutations from 'store/code/mutations/const';
  // import * as codeActions from 'store/code/actions/const';
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('code', {
        highscores: codeState.highscores
      })
    }
  }
</script>

<style lang="sass">

</style>
