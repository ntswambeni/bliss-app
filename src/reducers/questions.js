import {
  CLEAR_QUESTIONS_FILTER,
  FILTER_QUESTIONS,
  GET_QUESTIONS,
  SELECT_QUESTION,
  VOTE_QUESTION_OPTION,
} from "../actions/questions";

const questions = (
  state = {
    questionsList: [],
    selectedQuestion: null,
    offset: 0,
    searchOffset: 0,
    filteredQuestionsList: [],
  },
  action
) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questionsList: [...state.questionsList, ...action.questionsList],
        offset: state.offset + 10,
      };
    case FILTER_QUESTIONS:
      return {
        ...state,
        filteredQuestionsList: [
          ...state.filteredQuestionsList,
          ...action.filteredQuestionsList,
        ],
        searchOffset: state.searchOffset + 10,
      };
    case CLEAR_QUESTIONS_FILTER:
      return {
        ...state,
        filteredQuestionsList: [],
        searchOffset: 0,
      };
    case SELECT_QUESTION:
      return {
        ...state,
        selectedQuestion: action.selectedQuestion,
      };
    case VOTE_QUESTION_OPTION:
      return {
        ...state,
        selectedQuestion: action.votedQuestion,
        questionsList: [
          ...state.questionsList.map((question) =>
            question.id === action.votedQuestion.id
              ? action.votedQuestion
              : question
          ),
        ],
      };
    default:
      return state;
  }
};

export default questions;
