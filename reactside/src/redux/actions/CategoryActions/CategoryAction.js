import * as actionTypes from "../actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategorySuccess(category) {
  return { type: actionTypes.GET_CATEGORY_SUCCESS, payload: category };
}

export function getCategories() {
  return function (dispatch) {
    let url = "https://localhost:5001/api/Category";
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCategorySuccess(response)));
  };
}


export function getProductSuccess(product) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function getProduct(id) {
  return function (dispatch) {
    let url = "https://localhost:5001/api/Product/";
    if (id) {
      url = url + id;
    }
    return (
      fetch(url)
        .then((response) => response.json())
        .then((response) => dispatch(getProductSuccess(response)))
    );
  };
}



export const filterProducts = (products, size) => (dispatch) => {



    let wanted = [size]
    let res = products.filter(el =>
        el.availableSizes.some(
            i=>wanted.some(w=>w ===i.size)
        )
        ).map(products=>products)
        
        
  dispatch({
    type: actionTypes.FILTER_PRODUCT_BY_SİZE,
    payload: {
      size: size,
      items:
        size === "ALL"
          ? products
          : res
          
        }   
  });
};


export const filterProductsByCategory = (filteredProducts, categoryName) => (dispatch) => {

var res =filteredProducts.map(w=>w)
.filter(i=>i.category.categoryName===categoryName)
  
dispatch({
  type: actionTypes.FILTER_PRODUCT_BY_CATEGORY,
  payload: {
    categoryName: categoryName,
    items:
    categoryName === "All"
        ? filteredProducts
        : res
      }   
});
}

export const sortProducts = (filteredProducts, sort) => (dispatch)=>{
  const sortedProducts =  filteredProducts.slice();
  if (sort === "id") {
      sortedProducts.sort((a,b)=> (a.id > b.id)? 1 : -1)
  }
  else{
      sortedProducts.sort((a,b) =>(
          sort === "lowest" ? a.price > b.price?1:-1:
          a.price >b.price ? -1:1
      ))
  }
  dispatch({
      type: actionTypes.SORT_PRODUCT,
      payload: {
          sort:sort,
          items:sortedProducts
      }
  })
}