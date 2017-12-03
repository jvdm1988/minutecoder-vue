<template>
  <div id="dashboard">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex xs12 sm9>
          <v-card dark color="grey lighten-2">
            <v-card-text class="px-0">
              <coder></coder>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm3 class="highscore-box">
          <v-card dark color="white">
            <v-card-text class="px-0">
              <score></score>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import coder from 'components/coder/coder.vue';
  import score from 'components/coder/score.vue';
  import store from 'store';

  import * as authActions from 'store/auth/actions/const';
  import * as authGetters from 'store/auth/getters/const';
  import * as codeGetters from 'store/code/getters/const';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      coder,
      score
    },
    computed: {
      ...mapGetters('auth', {
        email: authGetters.user
      }),
      ...mapGetters('code', {
        code: codeGetters.code
      })
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
</style>
