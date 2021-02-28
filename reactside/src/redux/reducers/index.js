import {combineReducers} from "redux"
import loginReducer from "./LoginRegisterReducers/loginReducers"
import registerReducer from "./LoginRegisterReducers/registerReducer"
import changeCategoryReducer from "./CategoryReducers/changeCategoryReducer"
import categoryListReducer from "./CategoryReducers/categoryListReducer"
import productReducer from "./CategoryReducers/productReducer"
import trademarkAddReducer from "./TrademarkReducers/trademarkAddReducer"
import cartReducer from   "./CartReducers/cartReducer"
import adminTrademarkReducer from "./AdminReducers/AdminReducer"

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  changeCategoryReducer,
  categoryListReducer,
  productReducer,
  trademarkAddReducer,
  cartReducer,
  adminTrademarkReducer
});
export default rootReducer;