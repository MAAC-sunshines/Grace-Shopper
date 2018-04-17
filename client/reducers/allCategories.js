import axios from 'axios';

//action type
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';


//action creator
export const getAllCategories = function(allCategories) {
  return {
    type: GET_ALL_CATEGORIES,
    allCategories
  }
}

//reducer
export default function allInstruments(state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return [...state, action.allCategories]
    default:
      return state
  }
}

//thunk to get the categories
export function fetchAllCategories () {
  return function (dispatch) {
    axios.get('/api/categories')
      .then(res => res.data)
      .then(allCategories => {
        dispatch(getAllCategories(allCategories))
      })
      .catch(err => console.error(err))
  }
}
