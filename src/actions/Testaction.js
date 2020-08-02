import { TEST_REDUCER } from "./types";

export const testAction = () => dispatch => {
  dispatch({
    type: TEST_REDUCER
  });
};
