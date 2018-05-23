import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';
import totalReducer from './totalReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  total: totalReducer
});

export default rootReducer;
