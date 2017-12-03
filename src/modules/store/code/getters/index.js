import * as g from './const';

export default {
  [g.code](state) {
    return state.code;
  },
  [g.getStatus](state) {
    return state.started;
  },
  [g.completed](state) {
    return state.completed;
  }
};
