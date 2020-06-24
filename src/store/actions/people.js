export const SET_PEOPLE = 'SET_PEOPLE'
export const DELETE_PERSON = 'DELETE_PERSON'
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOWED_STATUS'

export const setPeople = (people) => ({type: SET_PEOPLE, people});

export const deletePerson = (id) => ({type: DELETE_PERSON, id});

export const changeBelovedStatus = (id) => ({type: CHANGE_BELOVED_STATUS, id})