import { Route, Switch } from "react-router-dom";
import Admin from "../Admin/Admin";
import Cart from "../Cart/Cart";
import HomePage from "../HomePage/HomePage";
import Products from "../HomePage/Products";
import Login from "../Login-Register/Login"
import Register from "../Login-Register/Register"
import AddTrademark from "../TrademarkAdmin/AddTrademark"

function App() {
  return (
    <div>
      
      <Switch>
      <Route path="/" exact component={HomePage} />
       <Route path="/addTrademark" component={AddTrademark}/>
       <Route path="/products/:id/" exact component={Products}/>
       <Route path="/products" exact component={Products}/>
       <Route path="/cart" exact component={Cart}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;



