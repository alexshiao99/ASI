import styled from 'styled-components';

const SearchBarStyle = styled.div `
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 800px;
  height: 35px;
  margin: 20px 0px;

  .urlSearchBar {
    width: 500px;
    margin-right: 15px;
    border-radius: 10px;
  }

  .Btn {
    border: 1px solid black;
    border-radius: 10px;
    width: 100px;
    margin: 2px;
    &:hover {
    cursor: pointer;
    };
    background-color: #DEC3EF;
    font-family: "Montserrat";
    font-size: 1.1em;
  }
`;

export default SearchBarStyle;