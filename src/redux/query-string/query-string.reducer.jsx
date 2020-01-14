import QueryStringActionTypes from "./query-string.types";

const INITIAL_STATE = {};

const queryStringReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QueryStringActionTypes.SET_QUERY_PARAM:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export default queryStringReducer;
