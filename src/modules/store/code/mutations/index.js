import * as m from './const';
import * as s from '../state/const';

export default {
  [m.START](state) {
    state[s.started] = true;
  },
  [m.STOP](state) {
    state[s.started] = false;
  },
  [m.STORE_CODE](state, code) {
    state[s.code] = code;
  }
};
