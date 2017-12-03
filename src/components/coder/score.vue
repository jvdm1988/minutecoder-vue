<template>
  <div id="score-list">
    <img src="../../assets/code/img/trophy.png" alt="">
    <h2>Highscore</h2>
    <div class="scores">
      <p><span>#1</span> User: Score</p>
      <p><span>#2</span> User: Score</p>
      <p><span>#3</span> User: Score</p>
      <p><span>#4</span> User: Score</p>
      <p><span>#5</span> User: Score</p>
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
  #dashboard {
    margin: 20px;
  }

  .container.grid-list-md .layout:only-child {
    margin: 0 auto;
    padding: 0;
  }

  .container {
      max-width: 100%;
  }

  .container.grid-list-md .layout .flex {
    padding: 10px;
  }
  .scores {
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    margin: 30px;
    padding: 10px;
  }

  .scores p:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .scores span {
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 80px;
  }

  h2 {
      margin-bottom: 20px;
  }

  h2, p {
    color: #000;
  }

  .flex.sm3 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 25%;
    max-width: 100%;
  }
</style>
