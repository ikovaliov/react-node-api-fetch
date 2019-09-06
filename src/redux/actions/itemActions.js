import { GET_ITEMS, SET_LOADING, ITEMS_ERROR } from './actionTypes';

export const getItems = post => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:3050/browse');
    const data = await res.json();

    dispatch({
      type: GET_ITEMS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: err.response
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
