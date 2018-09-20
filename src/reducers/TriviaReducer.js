import {
  ADD_USER_CHOICE,
  FETCH_TRIVIA_QUESTIONS_SUCCESS,
  RESET_TRIVIA_QUESTIONS,
  RESET_USER_CHOICES
} from "../actions/types";

const INTIAL_STATE = {
  userChoices: [],
  triviaQuestions: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_CHOICE:
      return { ...state, userChoices: [...state.userChoices, action.payload] };
    case FETCH_TRIVIA_QUESTIONS_SUCCESS:
      return { ...state, triviaQuestions: action.payload };
    case RESET_TRIVIA_QUESTIONS:
      return { ...state, triviaQuestions: [] };
    case RESET_USER_CHOICES:
      return { ...state, userChoices: [] };
    default:
      return state;
  }
};
