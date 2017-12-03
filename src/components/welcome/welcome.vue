<template>
  <div id="welcome">
    <h1>Time to learn something new!</h1>
    <p>You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Log In</router-link>
    </div>
    <coder></coder>
  </div>
</template>

<script>
  import coder from 'components/coder/coder.vue';

  export default {
    components: {
      coder
    }
  }
</script>

<style lang="sass">
  @import '~assets/highlight/solarized-dark.css';
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>
