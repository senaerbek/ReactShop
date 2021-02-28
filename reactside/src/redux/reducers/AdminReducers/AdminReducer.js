import * as actionTypes from "../../actions/actionTypes";
import InitialState from "../InitialState";

export default function adminTrademarkReducer(
  state = InitialState.addedTrademark,
  action
) {
  switch (action.type) {

    case actionTypes.ADMIN_PRODUCTS:
      return { product: action.payload };

    case actionTypes.ADMIN_TRADEMARKS:
      return { items: action.payload };

    case actionTypes.DELETE_TRADEMARK_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.UPDATE_TRADEMARK_SUCCESS:
      return {
        ...state,
        trademark: action.payload,
      };

    default:
      return state;
  }
}
