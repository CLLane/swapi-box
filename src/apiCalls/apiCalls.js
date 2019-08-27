export const getPeople = () => {
  return fetch("https://swapi.co/api/people").then(response => {
    if (!response.ok) {
      throw Error("Error Fetching Ideas");
    }
    return response.json();
  }).catch(error => {
    throw(Error(error.message))
  })
};

export const getVehicles = () => {
  return fetch("https://swapi.co/api/vehicles").then(response => {
    if (!response.ok) {
      throw Error("Error Fetching Ideas");
    }
    return response.json();
  }).catch(error => {
    throw(Error(error.message))
  })
};

export const getFilms = () => {
  return fetch("https://swapi.co/api/films").then(response => {
    if (!response.ok) {
      throw Error("Error Fetching Ideas");
    }
    return response.json();
  }).catch(error => {
    throw(Error(error.message))
  })
};

export const getPlanets = () => {
  return fetch("https://swapi.co/api/planets").then(response => {
    if (!response.ok) {
      throw Error("Error Fetching Ideas");
    }
    return response.json();
  }).catch(error => {
    throw(Error(error.message))
  })
};
