<template>
  <div id="dashboard">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex xs12 sm9>
          <v-card dark color="grey lighten-2">
            <v-card-text class="px-0">
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm3 class="highscore-box">
          <v-card dark color="white">
            <v-card-text class="px-0">
              <img src="../img/trophy.png" alt="">
              <h2>Highscore</h2>
              <div class="scores">
                <p><span>#1</span> User: Score</p>
                <p><span>#2</span> User: Score</p>
                <p><span>#3</span> User: Score</p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import store from 'store';
  import * as authActions from 'store/auth/actions/const';
  import * as authGetters from 'store/auth/getters/const';
  import * as codeGetters from 'store/code/getters/const';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('auth', {
        email: authGetters.user
      }),
      ...mapGetters('code', {
        code: codeGetters.code
      })
    },
    methods: {
      ...mapActions('auth', {
        fetchUser: authActions.fetchUser
      })
    },
    created () {
      this.fetchUser();
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/highlight/solarized-dark.css';

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

    .highscore-box {
      padding: 20px;
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
</style>
