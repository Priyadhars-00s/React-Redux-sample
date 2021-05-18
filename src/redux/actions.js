import axios from "axios";

export function login(data) {
  return {
    type: "LOGIN",
    data,
  };
}
export function logout() {
  return {
    type: "LOGOUT",
  };
}
export function addUser(data) {
  return {
    type: "USERS",
    data,
  };
}

export function companyUser(data) {
  return {
    type: "COMPANY",
    data,
  };
}

export function fetchuserDetails() {
  return async function (dispatch) {
    // const users = await axios.get("http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2")
    // dispatch(addUser(users.data.data));
    await axios
      .get("http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2")
      .then((response) => {
        dispatch(addUser(response.data.data));
        console.log("Inside fetchuserDetails=====>",response)
      });
  };
}

export function fetchCompanyDetails() {
  return async function (dispatch) {
    // const users = await axios.get("http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2")
    // dispatch(addUser(users.data.data));
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(companyUser(response.data.data));
        console.log("Inside fetchuserDetails=====>",response)
      });
  };
}
