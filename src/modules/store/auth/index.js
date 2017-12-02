import state from 'store/auth/state';
import mutations from 'store/auth/mutations';
import getters from 'store/auth/getters';
import actions from 'store/auth/actions';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
