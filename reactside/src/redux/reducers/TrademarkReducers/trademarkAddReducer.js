import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function trademarkAddReducer(state =InitialState.addedTrademark, action){
    switch (action.type) {
        case actionTypes.ADD_TRADEMARK_SUCCESS:
            return {
                ...state,
                isAdded : true,
                trademark : action.payload
                }
        
        case actionTypes.UPDATE_TRADEMARK_SUCCESS:
        return{
            ...state,
            trademark :action.payload
        }
        default:
            return state;
    }
}