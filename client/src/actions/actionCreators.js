import { FETCH_QUESTIONS, ADD_ANSWER, RESET_ANSWERS } from './types';
import axios from 'axios';

export function fetchQuestions() {
  return function(dispatch) {
    axios.get('https://floating-citadel-61216.herokuapp.com/questions')
      .then(response => dispatch({type: FETCH_QUESTIONS, payload: response.data.questions}));
  }
}

export function addAnswer(value) {
  return {
    type: ADD_ANSWER,
    payload: value
  };
}

export function resetAnswers() {
  return {
    type: RESET_ANSWERS
  };
}
