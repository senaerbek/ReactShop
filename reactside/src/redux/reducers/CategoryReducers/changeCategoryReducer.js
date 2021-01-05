import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function changeCategoryReducer(state =InitialState.currentCategory, action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        default:
            return state;
    }
}