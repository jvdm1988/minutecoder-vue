<template>
  <footer id="footer">
    <img src="../img/github-icon.png" alt="">
    <p>Follow us on Github:</p>
    <a href="https://github.com/RyanCommits">Ryan Wang</a> |
    <a href="https://github.com/allanac">Allana Coleman</a> |
    <a href="https://github.com/jvdm1988">Jessica van der Marel</a>
  </footer>
</template>


<style lang="sass" scoped>
  #footer {
    border-top: 1px solid #cccccc;
    padding: 15px 30px;
    background-color: #ededed;
    text-align: center;
  }

  footer img {
    width: 50px;
    height: auto;
  }

  p,
  a {
    font-size: 12px;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a:focus {
    color: #fa923f;
  }
</style>
