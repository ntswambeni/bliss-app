import { getAllQuestions, retriveQuestion, voteQuestion } from "../utils/api";
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

// Selects question from loaded list of questions or the filtered questions
// Used if the user goes to details page by clicking a question on the list
// Receives a question object
export const selectQuestion = (selectedQuestion) => ({
  type: SELECT_QUESTION,
  selectedQuestion,
});

const voteQuestionOption = (votedQuestion) => ({
  type: VOTE_QUESTION_OPTION,
  votedQuestion,
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

// Selects question from server if it was not yet loaded to the list of questions
// Used if the user goes to details page using the url
// Receives a question Id
export const handleSelectQuestion = (questionId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await retriveQuestion(questionId);
      const selectedQuestion = await response.json();
      dispatch(selectQuestion(selectedQuestion));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};

export const handleVoteOption = ({ questionId, vote }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await voteQuestion({ questionId, vote });
      const votedQuestion = await response.json();
      dispatch(voteQuestionOption(votedQuestion));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};
