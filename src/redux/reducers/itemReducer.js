import { GET_ITEMS, SET_LOADING, ITEMS_ERROR } from '../actions/actionTypes';

const initialState = {
  items: null,
  loading: false,
  error: null
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ITEMS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
