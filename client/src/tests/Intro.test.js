import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Intro from '../components/Intro';


describe('Intro', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Intro />);
  })

  it('should render without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a title', () => {
    expect(wrapper.find('.intro__title').exists()).to.equal(true);
  });

  it('should have a button', () => {
    expect(wrapper.find('.intro__button').exists()).to.equal(true);
  });
});
