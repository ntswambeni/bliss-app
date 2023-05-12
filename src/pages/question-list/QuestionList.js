import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/navbar";
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

const QuestionList = ({
  dispatch,
  loading,
  questionsList,
  filteredQuestionsList,
  offset,
  searchOffset,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter");
  //this functions is called when the user scrolls to the bottom of the page
  //it hits the api resquesting for more questions
  const loadMoreQuestions = () => {
    dispatch(handleGetQuestions({ limit: 10, offset: offset, filter: "" }));
  };

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

  const handleShareScreen = () => {
    //TODO
  };

  const list = searchQuery === null ? questionsList : filteredQuestionsList;

  useEffect(() => {
    if (questionsList.length === 0 && searchQuery === null) {
      loadMoreQuestions();
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        <FloatActionButton onClick={handleShareScreen}>
          <span className="material-symbols-outlined">share</span>
        </FloatActionButton>
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
