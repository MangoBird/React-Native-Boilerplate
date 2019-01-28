import produce from 'immer';
import { IWord } from '../../common/interfaces';
import { ADD_WORD, INIT_WORDS, REMOVE_WORD } from '../actions/words';

const initialWords: IWord[] = [];

export const wordsReducer = (words = initialWords, action: any) => {
  switch (action.type) {
    case ADD_WORD:
      return produce(words, draft => {
        draft.push(action.word);
      });
    case REMOVE_WORD:
      return produce(words, draft => {
        draft.forEach((word, index) => {
          if (word.alphabet === action.word.alphabet) draft.splice(index, 1);
        });
      });
    case INIT_WORDS:
      return initialWords;
    default:
      return words;
  }
};
