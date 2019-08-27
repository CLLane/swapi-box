import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import App from './App.js';
import Home from '../Home/Home.js'
import Landing from '../Landing/Landing.js'
import Card from '../Card/Card.js'
import CardDisplay from '../CardDisplay/CardDisplay.js'
import Container from '../Container/Container.js'

describe('Routes', () => {
  it('should show Home component for / route', () => {
    const homeComponent = mount( <MemoryRouter initialEntries = {['/']} >
        <App/>
      </MemoryRouter>
    );
    expect(homeComponent.find(Home)).toHaveLength(1);
  });

  it('should render the landing component for route /landing', () => {
    const landingComponent = mount(
      <MemoryRouter initialEntries={['/landing']} >
        <App />
      </MemoryRouter>
    );
    expect(landingComponent.find(Landing)).toHaveLength(1)
  });

  it('should render the card component for the routes /people, /vehicles, /planets, and /favorites', () => {
    const peopleRoute = mount(
      <MemoryRouter initialEntries={["/people"]}>
        <App />
      </MemoryRouter>
    );
    const vehiclesRoute = mount(
      <MemoryRouter initialEntries={["/vehicles"]}>
        <App />
      </MemoryRouter>
    );
    const planetsRoute = mount(
      <MemoryRouter initialEntries={["/planets"]}>
        <App />
      </MemoryRouter>
    );
    const favoritesRoute = mount(
      <MemoryRouter initialEntries={["/favorites"]}>
        <App />
      </MemoryRouter>
    );
    expect(peopleRoute.find(Container)).toHaveLength(1);
    expect(vehiclesRoute.find(Container)).toHaveLength(1);
    expect(planetsRoute.find(Container)).toHaveLength(1);
    expect(favoritesRoute.find(Container)).toHaveLength(1);
  })

    it("should render the cardDisplay and Container components for the routes /people/:id, /vehicles/:id, /planets/:id, and /favorites/:id", () => {
      
      const peopleRoute = mount(
        <MemoryRouter initialEntries={["/people/0"]}>
          <App />
        </MemoryRouter>
      );
      const vehiclesRoute = mount(
        <MemoryRouter initialEntries={["/vehicles/0"]}>
          <App />
        </MemoryRouter>
      );
      const planetsRoute = mount(
        <MemoryRouter initialEntries={["/planets/0"]}>
          <App />
        </MemoryRouter>
      );
      const favoritesRoute = mount(
        <MemoryRouter initialEntries={["/favorites/0"]}>
          <App />
        </MemoryRouter>
      );
      expect(peopleRoute.find(CardDisplay)).toHaveLength(1);
      expect(peopleRoute.find(Container)).toHaveLength(1);
      expect(vehiclesRoute.find(CardDisplay)).toHaveLength(1);
      expect(vehiclesRoute.find(Container)).toHaveLength(1);
      expect(planetsRoute.find(CardDisplay)).toHaveLength(1);
      expect(planetsRoute.find(Container)).toHaveLength(1);
      expect(favoritesRoute.find(CardDisplay)).toHaveLength(1);
      expect(favoritesRoute.find(Container)).toHaveLength(1);
    });

    it('should be able to set state when a card is favorited', () => {
      const mockCard = {name: 'Gucci Mane', homeworld: 'Trap House', species: 'G', population: 1}
      const mockFavorites = [{ name: 'Gucci Mane', homeworld: 'Trap House', species: 'G', population: 1}]

      const wrapper = shallow(<App />)
      wrapper.setState({people: [mockCard]})
      wrapper.instance().addToFavorites(mockCard)

      expect(wrapper.state('favorites')).toEqual(mockFavorites)
    })

    it('should be able to set state when a card is removed from favorites', () => {
      const mockCard = { name: 'Gucci Mane', homeworld: 'Trap House', species: 'G', population: 1 }
      const mockFavorites = [{ name: 'Gucci Mane', homeworld: 'Trap House', species: 'G', population: 1 }]

      const wrapper = shallow(<App />)
      wrapper.setState({favorites: mockFavorites})
      wrapper.instance().removeFromFavorites(mockCard)

      expect(wrapper.state('favorites')).toEqual([])
    })

    // it('should fire removeFromFavorites when a card is unfavorited', () => {
    //   const mockFavorites = [{ id: 1, name: 'Gucci Mane', homeworld: 'Trap House', species: 'G', population: 1}]
    //   const wrapper = shallow(<App />)
    //   wrapper.setState({ favorites: mockFavorites })
    //   const removeFromFavorites = jest.fn();
    //   wrapper.instance().toggleFav()

    //   expect(removeFromFavorites).toHaveBeenCalled()
    // })
});
