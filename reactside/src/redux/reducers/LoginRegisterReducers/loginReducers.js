import * as actionTypes from "../../actions/actionTypes"
import InitialState from "../InitialState";

export default function loginReducers (state=InitialState.login,action){
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
        
            return {
                ...state,
                isLoggin : true,
                loginUser : action.payload
                
                }
        default:
            return state;
    }
}