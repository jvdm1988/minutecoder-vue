<template>
  <div id="timer">
    <div class="container">
      <p id="result">{{seconds}}</p>
      <p id="sec">sec</p>
    </div>
    <h3>
    {{started}}</h3>
  </div>
</template>

<script>
  import * as codeGetters from 'store/code/getters/const';
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        seconds: 0,
        intervalId: null
      };
    },
    computed: {
      ...mapGetters('code', {
        started: codeGetters.getStatus
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
      }
    }
  }
</script>

<style lang="sass">
  .container {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #3B3A3F;
    font-family: 'Roboto', sans-serif;
    text-align: center;
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
