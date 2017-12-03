<template>
  <div id="score">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm3 class="highscore-box">
          <v-card dark color="white">
            <v-card-text class="px-0">
              <img src="../../assets/code/img/trophy.png" alt="">
              <h2>Highscore</h2>
              <div class="scores">
                <p><span>#1</span> User: Score</p>
                <p><span>#2</span> User: Score</p>
                <p><span>#3</span> User: Score</p>
              </div>
              <button>restart</button>
              <button @click="save({score: score, username: username, codeId: codeId})">save</button>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
    border: 1px solid #cccccc;
    border-radius: 2px;
    margin: 30px;
    padding: 20px;
  }

  .scores p:last-child {
    padding-bottom: 0;
  }

  span {
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 80px;
  }
  .highscore-box {
    padding: 20px;
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
