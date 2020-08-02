import { SEARCH_REDUCER, LOADED_REDUCER, LOADING_REDUCER } from "./types";
import axios from "axios";

export const searchData = (tag, option) => async dispatch => {
  await dispatch({
    type: LOADING_REDUCER
  });
  const SearchReq = await axios.get(
    `https://royal-stats.herokuapp.com/${option}/${tag}`
  );
  await dispatch({
    type: SEARCH_REDUCER,
    payload: SearchReq.data
  });
  await dispatch({
    type: LOADED_REDUCER
  });
};
