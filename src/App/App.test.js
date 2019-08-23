import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import App from './App.js';
import Home from '../Home/Home.js'
import Container from '../Container/Container.js'

describe('Routes', () => {
  it('should show Home component for / route', () => {
    const homeComponent = mount( <MemoryRouter initialEntries = {['/']} >
        <App/>
      </MemoryRouter>
    );
    expect(homeComponent.find(Home)).toHaveLength(1);
  });

  // it('should show Container component for /people route', () => {
  //   const component = mount( <MemoryRouter initialEntries = {['/people']} >
  //       <Container/>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(Container)).toHaveLength(1);
  // });
});
