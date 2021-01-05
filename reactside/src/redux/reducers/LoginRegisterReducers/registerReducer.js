import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function RegisterReducer(state = InitialState.register, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
} 