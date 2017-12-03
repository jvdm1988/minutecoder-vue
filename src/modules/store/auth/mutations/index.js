import * as m from './const';
import * as s from '../state/const';

export default {
  [m.AUTH_USER](state, userData) {
    // save the server response tokens to local state
    state[s.idToken] = userData.token;
    state[s.userId] = userData.userId;
  },
  [m.STORE_USER](state, username) {
    state[s.username] = username;
  }
};
