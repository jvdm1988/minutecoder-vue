import * as a from './const';
import * as m from '../mutations/const';
import * as s from '../state/const';

import axios from '../../../../axios-auth.js';
import globalAxios from 'axios';

export default {

  // register new user

  [a.signup] ({commit, dispatch}, authData) {
    axios.post('/signupNewUser?key=AIzaSyAEJvu2s0oJqdRxq5GqQQu6_RcN9Rz92Bc', {
      // authData is form data passed from signup.vue
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res);
        // the server responds back a data object with tokens
        commit(m.AUTH_USER, {
          token: res.data.idToken,
          userId: res.data.localId
        })

        // to store user data in Firebase database in addition to the Auth database
        dispatch(a.storeUser, authData)
      })
      .catch(error => console.log(error));
  },

  // login user

  [a.login] ({commit}, authData) {
    console.log(authData);
    axios.post('/verifyPassword?key=AIzaSyAEJvu2s0oJqdRxq5GqQQu6_RcN9Rz92Bc', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res);
        // the server responds back a data object with tokens
        commit(m.AUTH_USER, {
          token: res.data.idToken,
          userId: res.data.localId
        })
      })
      .catch(error => console.log(error));
  },

  // to store user data in Firebase database in addition to the Auth database

  [a.storeUser] ({commit, state}, userData) {
    if (!state.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
    .then(res => console.log(res))
    .catch(error => console.log(error))
  },

  [a.fetchUser] ({commit, state}) {
    globalAxios.get('/users.json' + '?auth=' + state.idToken)
    .then(res => {
      const data = res.data;
      const users = [];
      for (let key in data) {
        const user = data[key];
        user.id = key;
        users.push(user);
      }
      // console.log(users, 'heyyy');
      commit(m.STORE_USER, users[0]);
    })
    .catch(error => console.log(error))
  }
};
