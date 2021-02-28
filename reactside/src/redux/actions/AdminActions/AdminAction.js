import * as actionTypes from "../actionTypes";



export function getProductSuccess(product) {
  return { type: actionTypes.ADMIN_PRODUCTS, payload: product };
}

export function getProducts(id) {
  return function (dispatch) {
    let url = `https://localhost:5001/api/Admin/products/` + id;

    return fetch(url, 
      {
        headers: {'Content-Type': 'application/json',
        'Authorization':"Bearer "+ localStorage.getItem("token")},
      }
      )
      .then((response) => response.json())
      .then((response) => dispatch(getProductSuccess(response)));
  };
}


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

export function getTrademarkSuccess(trademark) {
    return { type: actionTypes.ADMIN_TRADEMARKS, payload: trademark };
  }
  
  export function getAdminTrademarks(id) {
    return function (dispatch) {
      let url = `https://localhost:5001/api/Admin/status/${id}`;
  
      return fetch(url, 
        {
          headers: {'Content-Type': 'application/json',
          'Authorization':"Bearer "+ localStorage.getItem("token")},
        }
        )
        .then((response) => response.json())
        .then((response) => dispatch(getTrademarkSuccess(response)));
    };
  }
  
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

  export function deleteTrademarkSuccess(trademark) {
    console.log(trademark)
    return {
      type: actionTypes.DELETE_TRADEMARK_SUCCESS,
      payload: trademark,
    };
  }
  
  export function deleteTrademarkApi(trademark) {
   
    return fetch(`https://localhost:5001/api/Admin/` + trademark, {
      method: "DELETE",
      body: JSON.stringify(trademark),
      headers: {
        "Content-Type": "application/json",
        'Authorization':"Bearer "+ localStorage.getItem("token")
      },
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function deleteTrademark(trademark) {
    
    return function (dispatch, getState) {
     
      var t = getState().adminTrademarkReducer.items.slice()
      .filter((x) => x.id !== trademark);
     
      return deleteTrademarkApi(trademark)
        .then((response) => dispatch(deleteTrademarkSuccess(t)))
        .catch((response) => {
          throw response;
        });
    };
  }

  //---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
export function updateTrademarkSuccess(trademark) {

  return {
    type: actionTypes.UPDATE_TRADEMARK_SUCCESS,
    payload: trademark,
  };
}

export function updateTrademarkApi(trademark) {
  return fetch(`https://localhost:5001/api/Admin/` + trademark, {
    method: "PUT",
    body: JSON.stringify(trademark),
    headers: {
      "Content-Type": "application/json",
      'Authorization':"Bearer "+ localStorage.getItem("token")
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateTrademark(trademark) {
  return function (dispatch) {
    return updateTrademarkApi(trademark)
      .then((response) => dispatch(updateTrademarkSuccess(trademark)))
      .catch((response) => {
        throw response;
      });
  };
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------


  export async function handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    const error = await response.text();
    throw new Error(error);
  }
  
  export async function handleError(error) {
    console.error(error);
  }
  