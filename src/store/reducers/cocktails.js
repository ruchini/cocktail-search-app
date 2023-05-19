import { FETCH_FIVE_ITEMS, SEARCH_SUCCESS, SEARCH_FAILURE } from "../../constants/actionType";

const cocktailsReducer = (cocktails = [], action) => {
  switch (action.type) {
    case FETCH_FIVE_ITEMS:
      return [...action.payload];
    case SEARCH_SUCCESS:
      return [...action.payload];
    case SEARCH_FAILURE:
      return [...action.payload];
    default:
      return cocktails;
  }
};

export default cocktailsReducer;
