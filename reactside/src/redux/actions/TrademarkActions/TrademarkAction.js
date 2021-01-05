import * as actionTypes from "../actionTypes"



export function getTrademarkSuccess(trademark){
    return {type: actionTypes.GET_TRADEMARK_SUCCESS, payload: trademark
    };
}

export function getTrademarks(){
    return function (dispatch){
        let url = "https://localhost:5001/api/Trademark/status"
      
        return fetch(url)
        .then(response=>response.json())
        .then(response=>dispatch(getTrademarkSuccess(response)))
    }
}


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

    return fetch("https://localhost:5001/api/Trademark", {
      method: "POST",
      body:data,

    }).then(handleResponse).then(
        response=>  localStorage.setItem("token", response.token)
     
     )
    .catch(handleError);
}


export function addTrademark(trademark){
    return function(){
        addTrademarkApi(trademark)
        .then(response=>console.log(response))
        .catch(response => {throw response})
    }
}


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