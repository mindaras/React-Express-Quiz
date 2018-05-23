import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../components/App';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });
});
