import { FETCH_QUESTIONS } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload.length;
    default:
      return state;
  }
}
