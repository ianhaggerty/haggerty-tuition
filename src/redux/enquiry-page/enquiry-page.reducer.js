import EnquiryPageActionTypes from "./enquiry-page.types";

const INITIAL_STATE = {
  lastVisited: "welcome",
  visited: [],
  invalid: []
};

const addToArray = (item, arr) => {
  if (arr.indexOf(item) === -1) {
    arr = [...arr, item];
  }
  return arr;
};

const EnquiryPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EnquiryPageActionTypes.ENQUIRY_PAGE_SET_VISITED:
      return {
        ...state,
        lastVisited: action.payload,
        visited: addToArray(action.payload, state.visited)
      };
    case EnquiryPageActionTypes.ENQUIRY_PAGE_SET_VALID:
      return {
        ...state,
        invalid: state.invalid.filter(el => el !== action.payload)
      };
    case EnquiryPageActionTypes.ENQUIRY_PAGE_SET_INVALID:
      return {
        ...state,
        invalid: addToArray(state.invalid, action.payload)
      };
    default:
      return state;
  }
};

export default EnquiryPageReducer;
