import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/CategoryActions/CategoryAction";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Filter from "../Filter/Filter";
import Fade from "react-reveal/Fade"
import Cart from "../Cart/Cart";
import * as cartActions from "../../redux/actions/CartActions/CartAction"

class Products extends Component {
  componentDidMount() {
    const id = this.props.match.params;
   // console.log(this.props)
    if (id) {
      this.props.actions.getProduct(id.id);
    } 
  }

  render() {
    return (
      <div>
         {console.log(this.props.products.items)}
       <Fade bottom cascade={true}>
        <Navigation />
       
        <Filter />
        {!this.props.products.filteredItems ? (
          <div style={{ textAlign: "center", margin: "200px" }}>loading...</div>
        ) : (
          <div>
            <div className="container">
              <div className="row">
                {this.props.products.filteredItems.map((y) => (
                  <div key={y.id} className="col-sm-3">
                    <Card style={{ margin: "10px" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="350"
                          image={"data:image/png;base64," + y.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {y.productName}
                          </Typography>
                          <Typography
                            noWrap
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {y.productDescription}

                            {/*!y.availableSizes ? (
                              <div>...</div>
                            ) : (
                              <div>
                                {y.availableSizes.map((size) => (
                                  <div>{size.size}</div>
                                ))}
                              </div>
                                )*/}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        ${y.price}
                        <Button
                        onClick={()=>this.props.actions.addToCart(y)}
                          style={{ marginLeft: "40%" }}
                          size="small"
                          color="primary"
                        >
                          Add
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
         </Fade>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    trademarks: state.trademarkListReducer,
    products: state.productReducer,
    filteredProducts: state.productReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
      addToCart:  bindActionCreators(cartActions.addToCart, dispatch)
   
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
