import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import imageUrl from "../../Images/exampleImage/example1.jpg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/CategoryActions/CategoryAction";
import { Link } from "react-router-dom";

class CategoryNavigation extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <div className="container">
        
        <Navbar expand="lg" variant="light">
      
          {this.props.categories.map((c) => (
              <Link to={"products/"+c.id}>
            <Navbar.Brand>
              <Card
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imageUrl}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Navbar.Brand>
            </Link>
          ))}
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavigation);
