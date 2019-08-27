import { getPeople, getVehicles, getFilms, getPlanets } from "../apiCalls/apiCalls.js";

describe('getPeople', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        name: 'Luke Skywalker',
        homeworld: 'Tatooine',
        species: 'human',
        population: 200000
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should return an array of people', () => {
    expect(getPeople()).resolves.toEqual(mockResponse)
    });

  it('should call fetch with the correct URL for people', () => {
    getPeople();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people");
  });

  it('should return an error if people response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getPeople()).rejects.toEqual(Error('Error Fetching Ideas'))
  });

  it('should return an error if the people promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getPeople()).rejects.toEqual(Error('Server is down.'))
  })
})

describe('getVehicles', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        vehicleClass: 'wheeled',
        numOfPassengers: 30
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should return an array of vehicles', () => {
    expect(getVehicles()).resolves.toEqual(mockResponse)
    });

  it('should call fetch with the correct URL for vehicles', () => {
    getVehicles();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/vehicles");
  });

  it('should return an error if vehicles response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getVehicles()).rejects.toEqual(Error('Error Fetching Ideas'))
  });

  it('should return an error if the vehicles promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getVehicles()).rejects.toEqual(Error('Server is down.'))
  })
})

describe('getFilms', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        quote: "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute."
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should return an array of films', () => {
    expect(getFilms()).resolves.toEqual(mockResponse)
    });

  it('should call fetch with the correct URL for films', () => {
    getFilms();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/films");
  });

  it('should return an error if films response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getFilms()).rejects.toEqual(Error('Error Fetching Ideas'))
  });

  it('should return an error if the films promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getFilms()).rejects.toEqual(Error('Server is down.'))
  })
})

describe('getPlanets', () => {
  let mockResponse;
  let residents = ['Leia OrganaRaymus', 'AntillesBail', 'Prestor Organa']

  beforeEach(() => {
    mockResponse = [
      {
        name: 'Aldreaan',
        popluation: 20000000000,
        terrain: 'grasslands, mountains',
        climate: 'temperate',
        residents: {residents}
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should return an array of planets', () => {
    expect(getPlanets()).resolves.toEqual(mockResponse)
    });

  it('should call fetch with the correct URL for planets', () => {
    getPlanets();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets");
  });

  it('should return an error if planets response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getPlanets()).rejects.toEqual(Error('Error Fetching Ideas'))
  });

  it('should return an error if the planets promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getPlanets()).rejects.toEqual(Error('Server is down.'))
  })
})