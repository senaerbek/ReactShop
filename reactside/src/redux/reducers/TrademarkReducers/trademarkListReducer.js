import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function trademarkListReducer(state=InitialState.trademarks, action){
    switch (action.type) {
        case actionTypes.GET_TRADEMARK_SUCCESS:
          return {items : action.payload}
        default:
          return state;
    }    
}