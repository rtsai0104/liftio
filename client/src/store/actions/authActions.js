const request = require('request');

export const logIn = (credentials) => async dispatch => {
  const response = await fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  console.log(await response.json());
  dispatch({ type: 'LOGIN_SUCCESS' });
};

export const signUp = (newUser) => async dispatch => {
  const response = await fetch('/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  console.log(await response.json());
  dispatch({ type: 'SIGNUP_SUCCESS' });

};
