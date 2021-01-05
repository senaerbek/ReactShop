import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/CartActions/CartAction";
import Card from "@material-ui/core/Card";
import Navigation from "../Navigation/Navigation";
import DeleteIcon from '@material-ui/icons/Delete';

class Cart extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div>
             {this.props.cartItems.cartItems.length} Ürün Listeleniyor
          </div>
           
          <div className="row">
            <div className="col-md-9 col-sm-12">
              {this.props.cartItems.cartItems.map((c) => (
                <Card 
                key={c.id}
                  style={{
                    display: "flex",
                    margin: "10px",
                    width: "100%",
                    height: "150px",
                  }}
                >
                  <DeleteIcon
                  onClick={()=>this.props.actions.removeFromCart(c)}
                  style={{marginTop:"50px", marginLeft:"10px"}}
                  />
                  <div className="col-md-3 col-sm-12" >
                    <img src={"data:image/png;base64," + c.image} style={{width:"50%", height:"100%",marginLeft:"20px"}}></img>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    {c.productName}
                    <br />
                    {c.productDescription}
                  </div>
                </Card>
              ))}
            </div>
            <div className="col-md-3">
              Eklenecek
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //filteredProducts: state.productReducer,
    cartItems: state.cartReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
