import { IWord } from '../../common/interfaces';

export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const INIT_WORDS = 'INIT_WORDS';

export const addWord = (word: string) => ({
  type: ADD_WORD,
  word
});

export const removeWord = (word: IWord) => ({
  type: REMOVE_WORD,
  word
});

export const initWords = () => ({
  type: INIT_WORDS
});
