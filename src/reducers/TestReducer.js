import { TEST_REDUCER } from "../actions/types";

const initialState = {
  result: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_REDUCER:
      return {
        ...state
      };
    default:
      return state;
  }
}
