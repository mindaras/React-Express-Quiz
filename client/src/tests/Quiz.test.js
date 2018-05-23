import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Quiz from '../components/Quiz';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

describe('Quiz', () => {
  let store, context, wrapper;

  beforeEach(() => {
    store = createStore(rootReducer);
    context = { store };
    wrapper = shallow(<Quiz/>, {context}).dive({context});
  });

  it('should render without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have 4 options', () => {
    expect(wrapper.find('.quiz-options__item')).to.have.length(4);
  });

  it('should have 6 questions', () => {
    expect(wrapper.state().total).to.equal(6);
  });

  it('should display the right question', () => {
    expect(wrapper.find('.quiz-question').text()).to.equal('Which of the following is the correct way of returning the length of this string?');
  });
});
