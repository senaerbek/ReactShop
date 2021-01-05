import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/CategoryActions/CategoryAction";

class Filter extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return !this.props.products.items ? (
      <div style={{ textAlign: "center", margin: "200px" }}>loading...</div>
    ) : (
      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="filter-result">
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="filter-sort">
              Order{" "}
              <select
              value={this.props.products.sort}
              onChange={(e) =>
                this.props.actions.sortProducts(
                  this.props.products.filteredItems,
                  e.target.value
                )
              }
              >
                <option value="id" >En Son</option>
                <option value="lowest">Düşük</option>
                <option value="highest">Yüksek</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="filter-size">
              Beden Seç{" "}
              <select
                value={this.props.products.size}
                onChange={(e) =>
                  this.props.actions.filterProducts(
                    this.props.products.items,
                    e.target.value
                  )
                }
              >
              
                <option value="ALL">Hepsi</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="filter-size">
              Kategori{" "}
              <select 
              value={this.props.products.categoryName}
              onChange={(e) =>
                this.props.actions.filterProductsByCategory(
                  this.props.products.filteredItems,
                  e.target.value
                )
              }
              >
                <option value="All">Hepsi</option>
                {this.props.categories.map((c) => (
                  <option key={c.id} value={c.categoryName}>{c.categoryName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    products: state.productReducer,
    size: state.productReducer,
    sort: state.productReducer,
    categoryName: state.productReducer,
    filteredProducts: state.productReducer,
    categories: state.categoryListReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      filterProducts: bindActionCreators(
        productActions.filterProducts,
        dispatch
      ),
      filterProductsByCategory: bindActionCreators(
        productActions.filterProductsByCategory,
        dispatch
      ),
      sortProducts: bindActionCreators(
        productActions.sortProducts,
        dispatch
      ),
      getCategories: bindActionCreators(productActions.getCategories, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
