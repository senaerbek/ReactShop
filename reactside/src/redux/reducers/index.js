import {combineReducers} from "redux"
import loginReducer from "./LoginRegisterReducers/loginReducers"
import registerReducer from "./LoginRegisterReducers/registerReducer"
import changeCategoryReducer from "./CategoryReducers/changeCategoryReducer"
import categoryListReducer from "./CategoryReducers/categoryListReducer"
import productReducer from "./CategoryReducers/productReducer"
import trademarkListReducer from "./TrademarkReducers/trademarkListReducer"
import trademarkAddReducer from "./TrademarkReducers/trademarkAddReducer"
import cartReducer from   "./CartReducers/cartReducer"

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  changeCategoryReducer,
  categoryListReducer,
  productReducer,
  trademarkListReducer,
  trademarkAddReducer,
  cartReducer
});
export default rootReducer;