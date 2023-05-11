import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexJustifyCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexCenter = styled(FlexJustifyCenter, FlexAlignCenter)`
  height: 100%;
`;
