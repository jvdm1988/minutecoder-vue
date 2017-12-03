<template>
  <div id="timer">
    <div class="timer-container timer-circle">
      <p id="result">{{seconds}}</p>
      <p id="sec">sec</p>
    </div>
  </div>
</template>

<script>
  import * as codeGetters from 'store/code/getters/const';
  import * as codeState from 'store/code/state/const';
  import * as scoreMutations from 'store/score/mutations/const';
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        seconds: 0,
        intervalId: null
      };
    },
    computed: {
      ...mapGetters('code', {
        started: codeGetters.getStatus,
        completed: codeState.completed
      })
    },
    methods: {
      ...mapMutations('score', {
        saveTime: scoreMutations.STORE_HIGHSCORE
      })
    },
    watch: {
      started(newVal, oldVal) {
        // when started == true, start the timer
        if (newVal !== oldVal && newVal) {
          this.intervalId = setInterval(() => {
            this.seconds++;
          }, 1000)
          return;
        }

        if (!newVal && this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      },
      completed(newVal, oldVal) {
        if (newVal !== oldVal && newVal === true) {
          this.saveTime(this.seconds);
          return;
        }
      }
    }
  }
</script>

<style lang="sass">
  .timer-container {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  .timer-circle{
    background: #3B3A3F;
  }


  #result, #sec {
    margin: 0;
    color: #00CE9B;
    font-weight: 700;
  }

  #result {
    padding: 60px 0 0;
    font-size: 80px;
    line-height: 60px;
  }

  #sec {
    font-size: 28px;
  }
  #pm {
    position: absolute;
    top: 70px;
    left: 20px;
    opacity: .1;
    z-index: 9999;
  }

</style>
