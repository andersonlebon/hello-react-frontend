const GET_MESSAGE = 'GET_MESSAGE';

const initialState = {
  message: null,
};

export const getGreeting = () => async (dispatch) => {
  const fetched = await fetch('http://localhost:3000/api/greetings');

  const text = await fetched.json();

  dispatch({
    type: GET_MESSAGE,
    payload: text,
  });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
