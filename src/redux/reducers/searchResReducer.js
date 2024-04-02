import { FETCH_SEARCH, FETCH_SECTION } from "../actions";

const initialState = {
  search: [],
  sections: {},
};

const resultReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_SECTION:
      const { label, items } = action.payload;
      const sections = { ...state.sections };
      sections[label] = items;

      return {
        ...state,
        sections,
      };
    default:
      return state;
  }
};

export default resultReducer;
