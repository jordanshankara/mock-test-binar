import { FETCH, FETCH_SUCCESS, FETCH_FAIL } from "../actions/todo";

const initialState = {
  todo: null,
  error: null,
};

function GetList(state = initialState, action) {
  switch (action.type) {
    case FETCH: {
      return {
        ...state,
      };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        todo: action.payload,
        error: null,
      };
    }

    case FETCH_FAIL: {
      return {
        ...state,
        gameDetails: null,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default GetList;
