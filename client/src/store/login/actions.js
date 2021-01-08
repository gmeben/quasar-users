import axios from 'axios'
/*
export function someAction (context) {
}
*/
export function registerUser({ commit, dispatch }, payload) {
  console.log('register')
  commit("setLoginError", {status: false, message: ""})

  axios.post('http://localhost:8080/register').then(response => {
    console.log('login', response)
  })
  .catch(error => {
    commit("setLoginError", {status: true, message: "An error occurred while authenticating."})
  })
  .finally(() => {
    commit("setIsLoading", false);
  });

}
export function authenticateUser({ commit, dispatch }, payload) {
  console.log('authenticate')
  commit("setLoginError", {status: false, message: ""})

  axios
    .get('http://localhost:8080/sanctum/csrf-cookie')
    .then(response => {
      axios.post('http://localhost:8080/login').then(response => {
        console.log('register', response)
      })
      .catch(error => {
        commit("setLoginError", {status: true, message: "An error occurred while registering."})
      })
      .finally(() => {
        commit("setIsLoading", false);
      })
    })
}
