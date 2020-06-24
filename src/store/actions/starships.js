export const SET_STARSHIPS = 'SET_STARSHIPS'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOWED_STATUS'

export const setStarships = (starships) => ({type: SET_STARSHIPS, starships});

export const deleteStarship = (id) => ({type: DELETE_STARSHIP, id});

export const changeBelovedStatus = (id) => ({type: CHANGE_BELOVED_STATUS, id})