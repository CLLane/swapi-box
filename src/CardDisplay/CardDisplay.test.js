import React from 'react';
import { shallow } from 'enzyme';
import CardDisplay from './CardDisplay';

describe('CardDisplay', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<CardDisplay
      id={1}
      name='Luke Skywalker'
      homeworld= 'Tatooine'
      species= 'Human'
      population= {200000}
      terrain= 'grasslands, mountains'
      climate= 'temperate'
      model= 'Digger Crawler'
      vehicleClass= 'wheeled'
      numberOfPassengers= '30'
      toggleFav={jest.fn()}
      type = '/people'
      />);

      expect(wrapper).toMatchSnapshot(); 
  })
});