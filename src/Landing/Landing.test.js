import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const film = '';
    const wrapper = shallow(<Landing
      film={film}
      />)
    expect(wrapper).toMatchSnapshot()
  })
})