import styled from "styled-components";
import { Label } from "../../styled-components/Typography";

export const DateLabel = styled(Label)`
  display: block;
  text-align: center;
  span:first-child {
    color: ${({ theme }) => theme.colors.disabled};
  }
`;

export const ThumbnailCountainer = styled.div`
  text-align: center;
  margin: 10px 0;
`;
