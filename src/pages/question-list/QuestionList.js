import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  handleFilterQuestions,
  handleGetQuestions,
} from "../../actions/questions";
import { BreadCrumb } from "../../styled-components/BreadCrumb";
import {
  CardLink,
  Header2,
  Paragraph,
} from "../../styled-components/Typography";
import { ContainerFluid } from "../../styled-components/Containers";
import SearchBar from "../../components/search-bar";
import QuestionCard from "../../components/question-card";
import { FlexWrap } from "../../styled-components/Flex";
import { FloatActionButton } from "../../styled-components/Buttons";
import ShareScreen from "../../components/share-screen";
import Cover from "../../components/cover";

const QuestionList = ({
  dispatch,
  loading,
  questionsList,
  filteredQuestionsList,
  offset,
  searchOffset,
}) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter");
  //this functions is called when the user scrolls to the bottom of the page
  //it hits the api resquesting for more questions
  const loadMoreQuestions = () => {
    dispatch(handleGetQuestions({ limit: 10, offset: offset, filter: "" }));
  };

  const [showShareScreen, setShowShareScreen] = useState(false);
  const loadFilteredQuestions = () => {
    dispatch(
      handleFilterQuestions({
        limit: 10,
        offset: searchOffset,
        filter: searchQuery,
      })
    );
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      if (searchQuery === null) {
        loadMoreQuestions();
      } else {
        loadFilteredQuestions();
      }
    }
  };

  const handleshowScreen = () => {
    setShowShareScreen((prev) => !prev);
  };

  const list = searchQuery === null ? questionsList : filteredQuestionsList;

  useEffect(() => {
    if (questionsList.length === 0 && searchQuery === null) {
      loadMoreQuestions();
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <>
      <BreadCrumb>
        <ContainerFluid>
          <Header2>Questions list</Header2>
        </ContainerFluid>
      </BreadCrumb>
      <ContainerFluid>
        <SearchBar />
        <FlexWrap>
          {list.map((question) => (
            <CardLink to={`/questions/${question.id}`} key={question.id}>
              <QuestionCard
                thumbnail={question.thumb_url}
                question={question.question}
              />
            </CardLink>
          ))}
        </FlexWrap>
        {loading && list.length > 0 && (
          <Paragraph style={{ marginBottom: "100px", textAlign: "center" }}>
            Loading more results...
          </Paragraph>
        )}
      </ContainerFluid>
      {searchQuery !== null && (
        <FloatActionButton onClick={handleshowScreen}>
          <span className="material-symbols-outlined">share</span>
        </FloatActionButton>
      )}
      {showShareScreen && (
        <Cover>
          <ShareScreen handleHide={handleshowScreen} />
        </Cover>
      )}
    </>
  );
};

const mapStateToProps = ({
  loading,
  questions: { questionsList, offset, searchOffset, filteredQuestionsList },
}) => ({
  questionsList,
  filteredQuestionsList,
  offset,
  searchOffset,
  loading,
});

export default connect(mapStateToProps)(QuestionList);
