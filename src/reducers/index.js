import { combineReducers } from "redux";
import TriviaReducer from "./TriviaReducer";

export default combineReducers({
  triviaReducer: TriviaReducer
});
