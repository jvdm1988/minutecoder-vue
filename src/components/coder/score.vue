<template>
  <div id="score">
    <h1>High Scores</h1>
    <table>
      <tr v-for="score in highscores">
        <th>{{score.username}}</th>
        <th>{{score.score}}</th>
      </tr>
    </table>
    <div>
      <button>Restart</button>
      <button @click="save({score: score, username: username})">Save Score</button>
    </div>
  </div>
</template>

<script>
  import store from 'store';

  import * as scoreActions from 'store/score/actions/const';
  import * as scoreState from 'store/score/state/const';
  import * as codeState from 'store/code/state/const';
  import * as authState from 'store/auth/state/const';
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState('code', {
        highscores: codeState.highscores,
        completed: codeState.completed
      }),
      ...mapState('auth', {
        username: authState.username,
      }),
      ...mapState('score', {
        score: scoreState.score
      })
    },
    methods: {
      ...mapActions('score', {
        save: scoreActions.saveScore
      })
    }
  }
</script>

<style lang="sass">

</style>
