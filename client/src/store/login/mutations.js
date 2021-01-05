/*
// synchronous methods to manipulate data in the state

export function someMutation (state) {
}
*/
export function setIsLoading(state, payload) {
  state.isLoading = payload;
}
export function setLoginUsername(state, payload) {
  state.loginUsername = payload;
}
export function setLoginName(state, payload) {
  state.loginName = payload;
}
export function setLoginEmail(state, payload) {
  state.loginEmail = payload;
}
export function setLoginPassword(state, payload) {
  state.loginPassword = payload;
}
export function setLoginError(state, payload) {
  state.loginErrorStatus = payload.status
  state.loginErrorMessage = payload.message;
}
