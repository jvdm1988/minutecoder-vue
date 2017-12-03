import * as a from './const';
import * as m from '../mutations/const';

import globalAxios from 'axios';

export default {

  [a.saveScore]({commit}) {
    globalAxios.get('/code.json')
    .then((res) => {
      const codeObject = res.data;

      console.log(res, 'response');

      commit(m.STORE_CODE, codeArray[0].code);
      commit(m.STORE_HIGHSCORES, codeArray[0].highscores);
      })
    .catch((error) => {
      console.log(error);
    });
  }
};
