import * as a from './const';
import * as m from '../mutations/const';
// import * as s from '../state/const';

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

      commit(m.STORE_CODE, codeArray[0].code);
      })
    .catch((error) => {
      console.log(error);
    });
  }
};
