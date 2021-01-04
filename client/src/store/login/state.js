// application state
export default function () {
  return {
    isLoading: false,
    userDetails: {},
    users: {},
    loginName: "",
    loginEmail: "",
    loginPassword: "",
    loginErrorStatus: false,
    loginErrorMessage: ""
  }
}
