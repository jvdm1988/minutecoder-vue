import * as a from './const';
import * as m from '../mutations/const';

import globalAxios from 'axios';

export default {

  [a.getCode]({commit}) {
    globalAxios.get('/code.json')
    .then((res) => {
      const codeObject = res.data;
      const codeArray = [];

      for (let i in codeObject) {
        codeArray.push(codeObject[i]);
      }

      console.log(res, 'response');
      console.log(res.data);
      console.log(codeArray, 'array');

      commit(m.STORE_CODE, codeArray[0]);
      commit(m.STORE_HIGHSCORES, codeArray[0].highscores);
      commit(m.STORE_CODEID, Object.keys(res.data)[0]);
      })
    .catch((error) => {
      console.log(error);
    });
  }
};
