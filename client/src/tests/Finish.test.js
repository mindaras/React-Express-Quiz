import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Finish from '../components/Finish';
import { createStore } from 'redux';

function rootReducer(state, action) {
  return {
      questions: [
        {
        id: 0,
        question: 'Question 1',
        options: ['first', 'second', 'third', 'fourth'],
        correct: 0
      },
      {
        id: 1,
        question: 'Question 2',
        options: ['first', 'second', 'third', 'fourth'],
        correct: 1
      }
    ],
    answers: [
      { question: 0, value: false, choice: 2 },
      { question: 1, value: true, choice: 1 }
    ]
  };
}

describe('Finish', () => {
  let store, context, wrapper;

  beforeEach(() => {
    store = createStore(rootReducer);
    context = { store };
    wrapper = shallow(<Finish/>, {context}).dive({context});
  });

  it('should render without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('it should have a result of 50%', () => {
    expect(wrapper.find('.finish__result').text()).to.equal('50%');
  });

  it('should have one question on the \'Questions you\'ve made mistakes in\' list', () => {
    expect(wrapper.find('.finish-question')).to.have.length(1);
  });

  it('should have a listed question with a text of \'Question 1\'', () => {
    expect(wrapper.find('.finish-question__question').text()).to.equal('Question 1');
  });

  it('should have a listed question with a correct answer of \'first\'', () => {
    expect(wrapper.find('.finish-question-answers__answer.correct').text()).to.equal('first');
  });

  it('should have a listed question with an incorrect answer of \'third\'', () => {
    expect(wrapper.find('.finish-question-answers__answer.incorrect').text()).to.equal('third');
  });
});
