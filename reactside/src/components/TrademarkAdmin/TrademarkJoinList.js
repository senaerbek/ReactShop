import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as trademarkAction from "../../redux/actions/TrademarkActions/TrademarkAction";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import * as productActions from "../../redux/actions/CategoryActions/CategoryAction";
import Fade from "react-reveal/Fade";

class TrademarkJoinList extends Component {
  componentDidMount() {
    this.props.actions.getTrademarks(1);
  }
  render() {
    return (
      <Fade bottom cascade={true}>
        {!this.props.trademarks.items ? (
          <div style={{ textAlign: "center", margin: "200px" }}>loading...</div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
                  SİZ DE MARKANIZI EKLEMEK İSTER MİSİNİZ?
                </h2>
              </div>

              {this.props.trademarks.items.slice(0, 24).map((t) => (
                <div className="col-sm-2" style={{ marginTop: "30px" }}>
                  <Card
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      margin: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={"data:image/png;base64," + t.image}
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </Fade>
    );
  }
}

function mapStateToProps(state) {
  return {
    trademarks: state.trademarkListReducer,
    products: state.productReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkJoinList);
