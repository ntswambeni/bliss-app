import React from "react";
import { AnswerOptionButton } from "./style";
import { connect } from "react-redux";
import { handleVoteOption } from "../../actions/questions";

const AnswerOption = ({ dispatch, choice, option, questionId }) => {
  const vote = {
    id: 1,
    image_url:
      "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    thumb_url:
      "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    question: "Favourite programming language?",
    choices: [
      {
        choice: "Swift",
        votes: 1,
      },
      {
        choice: "Python",
        votes: 0,
      },
      {
        choice: "Objective-C",
        votes: 0,
      },
      {
        choice: "Ruby",
        votes: 0,
      },
    ],
  };
  const handleVote = () => {
    dispatch(handleVoteOption({ questionId, vote }));
  };

  return (
    <AnswerOptionButton onClick={handleVote}>
      <span>{option}</span>
      <span>{`${choice.choice} (${choice.votes} vote(s))`}</span>
    </AnswerOptionButton>
  );
};

export default connect()(AnswerOption);
