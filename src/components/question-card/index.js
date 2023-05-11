import React from "react";
import { Card, CardBody } from "./style";
import { ThumbanailPicture } from "../../styled-components/Images";
import { withTheme } from "styled-components";
import { Anchor, Label, Paragraph } from "../../styled-components/Typography";

const QuestionCard = ({ theme }) => {
  return (
    <Card>
      <ThumbanailPicture
        widthSmallScreen="100%"
        widthLargeScreen="100%"
        heightSmallScreen="120px"
        alt="question thumbnail"
        src="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)"
        borderRadius={theme.border.radius}
      />
      <CardBody>
        <Paragraph>Favorite programming language?</Paragraph>
      </CardBody>
      <Anchor>
        Details<span className="material-symbols-outlined">navigate_next</span>
      </Anchor>
    </Card>
  );
};

export default withTheme(QuestionCard);
