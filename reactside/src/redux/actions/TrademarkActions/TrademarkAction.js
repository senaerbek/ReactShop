import * as actionTypes from "../actionTypes"



export function getTrademarkSuccess(trademark){
    return {type: actionTypes.GET_TRADEMARK_SUCCESS, payload: trademark
    };
}

export function getTrademarks(id){
    return function (dispatch){
        let url = `https://localhost:5001/api/Trademark/status/${id}`
        
        return fetch(url)
        .then(response=>response.json())
        .then(response=>dispatch(getTrademarkSuccess(response)))
    }
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
export function addTrademarkSuccess(trademark){
    return {
        type: actionTypes.ADD_TRADEMARK_SUCCESS,
        payload:trademark
    }
}
export function addTrademarkApi(trademark){
    let data = new FormData();
 
    data.append('Image', trademark.Image)
    data.append('Name', trademark.Name)
    data.append('Description', trademark.Description)


    return fetch("https://localhost:5001/api/Trademark/status", {
      method: "POST",
      body:data,

    }).then(handleResponse)
    .catch(handleError);
}



export function addTrademark(trademark){
    return function(dispatch){
        return addTrademarkApi(trademark)
        .then(response=>dispatch(addTrademarkSuccess(trademark)))
        .catch(response => {throw response})
    }
}


//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
export function updateTrademarkSuccess(trademark){
    return {
        type: actionTypes.UPDATE_TRADEMARK_SUCCESS,
        payload:trademark
    }
}

export function updateTrademarkApi(trademark){

    return fetch("https://localhost:5001/api/Trademark", {
      method: "PUT",
      body:JSON.stringify(trademark),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "PUT"
      },

    }).then(handleResponse)
    .catch(handleError);
}

export function updateTrademark(trademark){
    return function(dispatch){
        return updateTrademarkApi(trademark)
        .then(response=>dispatch(updateTrademarkSuccess(trademark)))
        .catch(response => {throw response})
    }
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------


export async function handleResponse(response){
    if (response.ok) {
        
        return response.json();
  
    }
    const error = await response.text();
   throw new Error(error);
   }
   
   export async function handleError(error){
     console.error(error);
   }