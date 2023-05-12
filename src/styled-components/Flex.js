import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexJustifyCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexJustifyBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexCenter = styled(FlexJustifyCenter, FlexAlignCenter)`
  height: 100%;
`;

export const FlexWrap = styled(Flex)`
  flex-wrap: wrap;
  gap: 15px;
`;
