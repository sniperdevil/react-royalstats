import {
  SEARCH_REDUCER,
  LOADED_REDUCER,
  LOADING_REDUCER
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_REDUCER:
      return {
        player: action.payload
      };
    case LOADING_REDUCER:
      return {
        loading: true
      };
    case LOADED_REDUCER:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
