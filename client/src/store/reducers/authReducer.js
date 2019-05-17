const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;