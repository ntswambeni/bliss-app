import { getAllQuestions } from "../utils/api";
import { setLoading } from "./loading";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const FILTER_QUESTIONS = "FILTER_QUESTIONS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const VOTE_QUESTION_OPTION = "VOTE_QUESTION_OPTION";
export const CLEAR_QUESTIONS_FILTER = "CLEAR_QUESTIONS_FILTER";

const getQuestions = (questionsList) => ({
  type: GET_QUESTIONS,
  questionsList,
});

const filterQuestions = (filteredQuestionsList) => ({
  type: FILTER_QUESTIONS,
  filteredQuestionsList,
});

const clearQuestionsFilter = () => ({
  type: CLEAR_QUESTIONS_FILTER,
});

const selectQuestion = (question) => ({
  type: SELECT_QUESTION,
  question,
});

const voteQuestionOption = (question) => ({
  type: VOTE_QUESTION_OPTION,
  question,
});

export const handleGetQuestions = (queryParams) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await getAllQuestions(queryParams);
      const questionsList = await response.json();
      dispatch(getQuestions(questionsList));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};

export const handleFilterQuestions = (queryParams) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await getAllQuestions(queryParams);
      const filteredQuestionsList = await response.json();
      dispatch(filterQuestions(filteredQuestionsList));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};

export const handleClearQuestionsFilter = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(clearQuestionsFilter());
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};
