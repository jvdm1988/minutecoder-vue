<template>
  <div id="score-list">
    <img src="../../assets/code/img/trophy.png" alt="">
    <h2>Highscore</h2>
    <div class="scores">
      <p v-for="(score, index) in highscores"><span>#{{index + 1}}</span> User: {{highscores[index].username}} Record: {{highscores[index].score}} secs</p>
    </div>
    <button>restart</button>
 -  <button @click="save({score: score, username: username, codeId: codeId})">save</button>
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
        // highscores: codeState.highscores,
        completed: codeState.completed,
        codeId: codeState.codeId,
        highscores: codeState.highscores
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
  button {
    color: black;
  }
</style>
