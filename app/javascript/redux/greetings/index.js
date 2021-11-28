import { getRandomMessage } from '../api';
const GET_RANDOM_GREETING = 'greetings/random';

export const getRandomGreeting = (payload) => ({
  type: GET_RANDOM_GREETING,
  payload,
});

export const randomGreeting = () => async (dispatch) => {
  const data = await getRandomMessage();
  dispatch(getRandomGreeting(data));
};

const initialState = {
  message: null,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GREETING:
      return { ...state, message: action.payload.greeting, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
