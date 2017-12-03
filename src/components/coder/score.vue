<template>
    <div id="score-list">
      <timer></timer>
      <h2>Highscore:</h2>
      <div class="scores">
        <p><span>#1</span> User: Score</p>
        <p><span>#2</span> User: Score</p>
        <p><span>#3</span> User: Score</p>
        <p><span>#4</span> User: Score</p>
        <p><span>#5</span> User: Score</p>
      </div>
      <button>restart</button>
   -  <button @click="save({score: score, username: username, codeId: codeId})">save</button>
    </div>
</template>

<script>
  import store from 'store';
  import timer from './timer.vue';

  import * as scoreActions from 'store/score/actions/const';
  import * as scoreState from 'store/score/state/const';
  import * as codeState from 'store/code/state/const';
  import * as authState from 'store/auth/state/const';
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      timer
    },
    computed: {
      ...mapState('code', {
        highscores: codeState.highscores,
        completed: codeState.completed,
        codeId: codeState.codeId
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
    margin: 20px;
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
      margin-bottom: 10px;
  }

  h2, p {
    color: #000;
  }

  button {
      text-decoration: none;
      display: inline-block;
      border: 1px solid #cccccc;
      border-radius: 3px;
      width: 100px;
      padding: 10px;
      box-sizing: border-box;
      color: #000;
  }

  button:hover,
  button:active {
    background-color: #016dba;
    color: white;
    -moz-transition: all 0.3s ease-in;
    /* WebKit */
    -webkit-transition: all 0.3s ease-in;
    /* Opera */
    -o-transition: all 0.3s ease-in;
    /* Standard */
    transition: all 0.3s ease-in;
  }
</style>
