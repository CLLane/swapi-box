import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const data = [{
      id: 1,
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      species: 'Human',
      population: 200000
    }]
    const wrapper = shallow(<Container
      data= {data}
      toggleFav={jest.fn()}
      type = '/people'
      />);

      expect(wrapper).toMatchSnapshot(); 
  })
});