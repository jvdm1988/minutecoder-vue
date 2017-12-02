<template>
  <form class="signup-form">
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
      type="password"
      v-model="password"
      :error-messages="passwordErrors"
      :counter="10"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      required
    ></v-text-field>
      <v-text-field
      v-validate="'required|confirmed:password'"
      label="Confirm Password"
      type="password"
      v-model="confirmPassword"
      :error-messages="passwordErrors"
      :counter="10"
      @input="$v.confirmPassword.$touch()"
      @blur="$v.confirmPassword.$touch()"
      data-vv-as="password"
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
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    methods: {
      ...mapActions('auth', {
        signup: authActions.signup
      }),
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        this.signup(formData);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .signup-form {
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
