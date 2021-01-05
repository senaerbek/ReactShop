import * as actionTypes from "../../actions/actionTypes";
import InitialState from "../InitialState";

export default function productReducer(state = InitialState.products, action) {
  // export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCT_BY_SİZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };

    case actionTypes.FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categoryName: action.payload.categoryName,
        filteredItems: action.payload.items,
      };


      case actionTypes.SORT_PRODUCT:
      return{
        ...state,
      sort: action.payload.sort,
      filteredItems: action.payload.items
      }

    case actionTypes.GET_PRODUCT_SUCCESS:
      return { items: action.payload, filteredItems: action.payload };

    default:
      return state;
  }
}
