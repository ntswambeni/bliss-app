import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { handleSelectQuestion, selectQuestion } from "../../actions/questions";
import { BreadCrumb } from "../../styled-components/BreadCrumb";
import { Container, ContainerFluid } from "../../styled-components/Containers";
import { Header2, Paragraph } from "../../styled-components/Typography";
import { DateLabel, ThumbnailCountainer } from "./style";
import { ThumbnailPicture } from "../../styled-components/Images";
import AnswerOption from "../../components/answer-option";
import { FloatActionButton } from "../../styled-components/Buttons";
import Cover from "../../components/cover";
import ShareScreen from "../../components/share-screen";
import NotFound from "../not-found/NotFound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionDetails = ({
  dispatch,
  selectedQuestion,
  loading,
  questionId,
  questionsList,
  filteredQuestionsList,
}) => {
  const [showShareScreen, setShowShareScreen] = useState(false);

  //load question base on query id
  const loadQuestion = (questionId) => {
    //declares question object value from the questions list or the filtered list
    const question =
      questionsList.filter(
        (question) => question.id === parseInt(questionId)
      )[0] ||
      filteredQuestionsList.filter(
        (question) => question.id === parseInt(questionId)
      )[0];

    if (question) {
      //gets the question object from the questions list or the filtered list
      dispatch(selectQuestion(question));
    } else {
      //gets the question object from the server
      dispatch(handleSelectQuestion(questionId));
    }
  };

  const handleshowScreen = () => {
    setShowShareScreen((prev) => !prev);
  };

  const createOption = (index) => {
    const optionLookup = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
    };

    return optionLookup[index];
  };

  useEffect(() => {
    loadQuestion(questionId);
    // eslint-disable-next-line
  }, [questionId]);

  const formatDate = (date) => {
    const formatedDate = new Date(date);
    const options = {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Lisbon",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(formatedDate);
  };

  if (loading) {
    return <div />;
  }

  if (!selectedQuestion) {
    return <NotFound />;
  }

  return (
    <>
      <BreadCrumb>
        <ContainerFluid>
          <Link to="/questions">
            <span className="material-symbols-outlined">navigate_before</span>{" "}
            List
          </Link>
          <Header2>
            Question id: {selectedQuestion && selectedQuestion.id}
          </Header2>
        </ContainerFluid>
      </BreadCrumb>
      <Container>
        <DateLabel>
          <span>Published on:</span>{" "}
          <span>
            {formatDate(selectedQuestion && selectedQuestion.published_at)}
          </span>
        </DateLabel>
        <ThumbnailCountainer>
          <ThumbnailPicture
            heightSmallScreen="100%"
            widthSmallScreen="100%"
            maxWidth="600px"
            borderRadius="6px"
            src={selectedQuestion && selectedQuestion.image_url}
            alt="Questions cover"
          />
        </ThumbnailCountainer>

        <Paragraph textAlign="center" margin="3rem 0">
          {selectedQuestion && selectedQuestion.question}
        </Paragraph>
        <ThumbnailCountainer>
          {selectedQuestion &&
            selectedQuestion.choices.map((choice, index) => (
              <AnswerOption
                key={choice.choice}
                choice={choice}
                option={createOption(index)}
                questionId={questionId}
              />
            ))}
        </ThumbnailCountainer>
      </Container>
      <FloatActionButton onClick={handleshowScreen}>
        <span className="material-symbols-outlined">share</span>
      </FloatActionButton>
      {showShareScreen && (
        <Cover>
          <ShareScreen handleHide={handleshowScreen} />
        </Cover>
      )}
    </>
  );
};

const mapStatetoProps = (
  {
    questions: { selectedQuestion, questionsList, filteredQuestionsList },
    loading,
  },
  { router }
) => {
  const { id: questionId } = router.params;

  return {
    loading,
    selectedQuestion,
    questionId,
    questionsList,
    filteredQuestionsList,
  };
};

export default withRouter(connect(mapStatetoProps)(QuestionDetails));
