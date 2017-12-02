import * as g from './const';

export default {
  [g.user](state) {
    return state.user ? state.user : false;
  },
  [g.isLoggedIn](state) {
    return state.idToken !== null;
  }
};
