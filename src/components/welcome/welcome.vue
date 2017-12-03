<template>
  <div id="welcome">
    <div class="intro">
      <h1 class="intro-title">Type Fast, Think Fast &amp; Do the Test</h1>
      <p class="intro-text">Can you get the highscore title? We challenge you!</p>
      <p class="intro-text">Sign Up or Log In to start</p>
      <div class="cta">
        <button type="button" name="button"><router-link to="/signup">Sign Up</router-link></button>
        <button type="button" name="button"><router-link to="/signin">Log In</router-link></button>
        <img class="keyboard-img" src="../../assets/code/img/keyboard1.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '~assets/highlight/solarized-dark.css';
  #welcome {
    width: 100%;
    margin: 0;
  }

  .intro {
    padding: 60px;
  }

  .intro-2 {
    width: 100%;
  }

  .intro-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .intro-text {
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
    border: 1px solid #cccccc;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #000;
  }

  .cta a:hover,
  .cta a:active {
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

  .keyboard-img {
    margin-top: 40px;
    width: 100%;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }

  h2, p {
    color: #000;
  }


</style>
