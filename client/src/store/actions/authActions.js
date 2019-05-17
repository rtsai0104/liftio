export const signIn = (credentials) => {
  return (dispatch, getState) => {
    console.log(credentials);
    dispatch({ type: 'LOGIN_SUCCESS' });
  }
}

export const signUp = (newUser) => {
  return (dispatch) => {
    console.log(newUser);
    dispatch({ type: 'SIGNUP_SUCCESS' });
  }
}