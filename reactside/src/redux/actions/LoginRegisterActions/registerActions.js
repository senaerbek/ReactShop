import * as actionTypes from "../actionTypes"


export function registerSuccess(registerUser){
  return {
      type: actionTypes.REGISTER_SUCCESS,
      payload:registerUser
  }
}


export function registerApi(registerUser){
    return fetch("https://localhost:5001/api/Auth/register", {
      method: "POST",
      body:JSON.stringify(registerUser),
      headers: {'Content-Type': 'application/json',
      'Authorization':"Bearer "+ localStorage.getItem("token")},
      //headers...
    }).then(handleResponse).then(
      response=>  localStorage.setItem("token", response.token)
   )
    .catch(handleError);
}



export function Register(registerUser){
    return function(dispatch){
       return registerApi(registerUser)
        .then(response => dispatch(registerSuccess(registerUser)))
        .catch(response => {throw response})
    }
    
}

export async function handleResponse(response) {
  if (response.ok) {
    setTimeout(function(){ 
      window.location = "/";
      },2000);
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}
   
   export async function handleError(error){
     console.error("api hatası");
   }