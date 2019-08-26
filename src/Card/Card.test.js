import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const residents = []
    const wrapper = shallow(<Card
      id={1}
      name='Luke Skywalker'
      homeworld= 'Tatooine'
      species= 'Human'
      population= {200000}
      terrain= 'grasslands, mountains'
      climate= 'temperate'
      residents={residents}
      model= 'Digger Crawler'
      vehicleClass= 'wheeled'
      numberOfPassengers= '30'
      toggleFav={jest.fn()}
      type = '/people'
      />);

      expect(wrapper).toMatchSnapshot(); 
  })

  it('should match the snapshot if the card is favorited', () => {
    const wrapper = shallow(<Card
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
      isFavorite={true}
      toggleFav={jest.fn()}
      type = '/people'
      />);

      expect(wrapper).toMatchSnapshot(); 
  })

  it('should call the toggleFav prop with the card\'s id when clicked', () => {
    const toggleFavMock = jest.fn();
    const wrapper = shallow(<Card
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
      isFavorite={true}
      toggleFav={toggleFavMock}
      type = '/people'
      />); 
      wrapper.find('.favorite-img').simulate('click');

      expect(toggleFavMock).toHaveBeenCalled();
  })
});