import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as trademarkAction from "../../redux/actions/TrademarkActions/TrademarkAction";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import * as productActions from "../../redux/actions/CategoryActions/CategoryAction";
import Fade from "react-reveal/Fade"

class Trademarks extends Component {
  componentDidMount() {
    this.props.actions.getTrademarks();
  
  }

  select = (pid) =>{
    this.props.actions.getProduct(pid);
  }
  render() {
    return (
      <div>
    <Fade bottom cascade={true}>
        {!this.props.trademarks.items ? (
          <div style={{ textAlign: "center", margin: "200px" }}>loading...</div>
        ) : (
          <div className="container">
            <div className="row">
       
              {this.props.trademarks.items.map((trademark) => (
                <div key={trademark.id} className="col-lg-4">
                  <Card style={{ margin: "10px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={"data:image/png;base64," + trademark.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {trademark.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {trademark.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                      <Link  to={"products/" + trademark.id} onClick={()=>this.select(trademark.id)} > git</Link>
                      
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
        </Fade>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    trademarks: state.trademarkListReducer,
    products: state.productReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTrademarks: bindActionCreators(
        trademarkAction.getTrademarks,
        dispatch
      ),
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trademarks);
