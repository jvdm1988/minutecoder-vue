<template>
  <form class="login-form">
    <v-text-field
      label="Username"
      v-model="username"
      :error-messages="usernameErrors"
      :counter="20"
      @input="$v.username.$touch()"
      @blur="$v.username.$touch()"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required'"
      label="Password"
      v-model="password"
      :error-messages="passwordErrors"
      :counter="10"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      required
    ></v-text-field>
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import store from 'store';
import * as authActions from 'store/auth/actions/const';
import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions('auth', {
        login: authActions.login
      }),
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        this.login(formData);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .login-form {
    width: 60%;
    margin: 0 auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .primary--text {
    color: #fa923f !important;
  }
</style>
