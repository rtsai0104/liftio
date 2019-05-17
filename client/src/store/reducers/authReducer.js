const initState = {
  authError: null,
  token: false
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null,
        token: true
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null,
        token: true
      };
    default:
      return state;
  }
};

export default authReducer;