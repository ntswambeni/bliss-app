import React from "react";
import { withTheme } from "styled-components";

import { Card, CardBody } from "./style";
import { ThumbanailPicture } from "../../styled-components/Images";
import { Label, Paragraph } from "../../styled-components/Typography";

const QuestionCard = ({ theme, question, thumbnail }) => {
  return (
    <Card>
      <ThumbanailPicture
        widthSmallScreen="100%"
        widthLargeScreen="100%"
        heightSmallScreen="120px"
        alt="question thumbnail"
        src={thumbnail}
        borderRadius={theme.border.radius}
      />
      <CardBody>
        <Paragraph>{question}</Paragraph>
      </CardBody>
      <Label>
        Details<span className="material-symbols-outlined">navigate_next</span>
      </Label>
    </Card>
  );
};

export default withTheme(QuestionCard);
