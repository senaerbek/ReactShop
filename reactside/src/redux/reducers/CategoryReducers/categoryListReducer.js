import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function categoryListReducer(state =InitialState.categories, action){
    switch (action.type) {
        
        case actionTypes.GET_CATEGORY_SUCCESS:
            return action.payload
        default:
            return state;
    }
}