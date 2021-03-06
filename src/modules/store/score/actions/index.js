import * as a from './const';
import * as m from '../mutations/const';

import globalAxios from 'axios';

export default {

  [a.saveScore]({state, commit, rootState}, score) {
    console.log(rootState, 'rootState');
    console.log(rootState.code.highscores);

    const token = rootState.auth.idToken;
    const highScoreArray = rootState.code.highscores;
    const language = rootState.code.language.toLowerCase();
    const codeId = score.codeId;

    // sort array from lowest to highest seconds

    highScoreArray.sort((a, b) => {
      return a.score - b.score;
    });

    // if it's a better score, replace the score in Array
    for (let i = 0; i < highScoreArray.length; i++) {
      if (highScoreArray.length <= 6) {
        if (score.score < highScoreArray[i].score) {
          highScoreArray.splice(i, 0, {score: score.score, username: score.username});
          break;
        } else if (score.score < highScoreArray[i].score) {
          highScoreArray.splice(i, 1, {score: score.score, username: score.username});
          break;
        }
      }
    }

    console.log(score);

    globalAxios.put(`/${language}/${score.codeId}/highscores.json?auth=${token}`, highScoreArray)
      .then((res) => {
        console.log(res, 'response');
        })
      .catch((error) => {
        console.log(error);
    });
  }
};
