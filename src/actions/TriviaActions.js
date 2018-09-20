import {
  FETCH_TRIVIA_QUESTIONS_SUCCESS,
  FETCH_TRIVIA_QUESTIONS_FAILURE,
  ADD_USER_CHOICE,
  RESET_USER_CHOICES,
  RESET_TRIVIA_QUESTIONS
} from "./types";

const getChoosenTriviaQuestionsSuccess = triviaQuestions => {
  return {
    type: FETCH_TRIVIA_QUESTIONS_SUCCESS,
    payload: triviaQuestions
  };
};

const getChoosenTriviaQuestionsFailure = error => {
  return {
    type: FETCH_TRIVIA_QUESTIONS_FAILURE,
    payload: error
  };
};

export const fetchTriviaQuestions = difficulty => {
  const fetchOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return async dispatch => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`,
        fetchOptions
      );
      const data = await response.json();
      dispatch(getChoosenTriviaQuestionsSuccess(data.results));
    } catch (err) {
      dispatch(getChoosenTriviaQuestionsFailure(err));
    }
  };
};

export const addUserChoice = choice => {
  return {
    type: ADD_USER_CHOICE,
    payload: choice
  };
};

export const resetUserChoices = () => {
  return {
    type: RESET_USER_CHOICES
  };
};

export const resetTriviaQuestions = () => {
  return {
    type: RESET_TRIVIA_QUESTIONS
  };
};
