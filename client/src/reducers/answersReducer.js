import { ADD_ANSWER, RESET_ANSWERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state, action.payload];
    case RESET_ANSWERS:
      return [];
    default:
      return state;
  }
}
