import * as a from './const';
import * as m from '../mutations/const';

import globalAxios from 'axios';

export default {

  [a.saveScore]({commit}, score) {
    console.log(score);
  //   globalAxios.get('/code.json')
  //   .then((res) => {
  //     console.log(res, 'response');
  //     })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  }
};
