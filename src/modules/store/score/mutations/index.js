import * as m from './const';
import * as s from '../state/const';

export default {
  [m.STORE_HIGHSCORE](state, highscore) {
    state[s.score] = highscore;
  }
};
