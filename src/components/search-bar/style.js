import styled from "styled-components";

export const SearchCard = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 15px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 6px;
  border: none;
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.border.radius} 0 0
    ${({ theme }) => theme.border.radius};
  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchButton = styled.button`
  border-radius: 0 ${({ theme }) => theme.border.radius}
    ${({ theme }) => theme.border.radius} 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.surface};
  color: ${(props) => props.color || props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export const SearchForm = styled.form`
  display: flex;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
