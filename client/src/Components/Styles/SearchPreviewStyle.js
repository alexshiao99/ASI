import styled from 'styled-components';

const SearchPreviewStyle = styled.div `
  border: 1px solid #B972E5;
  border-radius: 5px;
  padding: 20px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    box-shadow: 0 0 10px 1px #B972E5;
    transition: 0.25s;
  };
`;

export default SearchPreviewStyle;