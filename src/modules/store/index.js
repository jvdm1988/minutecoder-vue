import Vue from 'vue';
import Vuex from 'vuex';
import auth from 'store/auth';
import code from 'store/code';
import score from 'store/score';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    code,
    score
  }
});
