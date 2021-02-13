import * as actionTypes from "../actionTypes";


export function LoginSuccess(LoginUser) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: LoginUser,
  };
}

//asenkron olaylarda thunk kullan
export function loginApi(LoginUser) {
  return fetch("https://localhost:5001/api/Auth/login", {
    method: "POST",
    body: JSON.stringify(LoginUser),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    //headers...
  })
    .then(handleResponse)
    .then((response) => localStorage.setItem("token", response.token))
    .catch(handleError);
}

export function Login(LoginUser) {
  return function (dispatch) {
    //console.log(LoginUser)
    return loginApi(LoginUser)
      .then((response) => dispatch(LoginSuccess(LoginUser)))
      .catch((response) => {
        throw response;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    setTimeout(function () {
        window.location = "/";
    }, 2000);
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export async function handleError(error) {
  console.log(error);
  //console.error("api hatası");
}
