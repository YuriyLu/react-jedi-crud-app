export const SET_PLANETS = 'SET_PLANETS'
export const DELETE_PLANET = 'DELETE_PLANET'
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOWED_STATUS'

export const setPlanets = (planets) => ({type: SET_PLANETS, planets});

export const deletePlanet = (id) => ({type: DELETE_PLANET, id});

export const changeBelovedStatus = (id) => ({type: CHANGE_BELOVED_STATUS, id})