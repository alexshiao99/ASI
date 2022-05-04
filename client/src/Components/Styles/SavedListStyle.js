import styled from 'styled-components';

export const WatchTitleDiv = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  padding: 30px 0;
`;

export const SavedListDiv = styled.div`
  overflow-y: scroll;
  height: 500px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListEntryDiv = styled.div`
  border: 0.5px solid #B972E5;
  width: 80vw;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    transition: 0.25s;
    box-shadow: 0 0 10px 1px #B972E5;
  }
`;

export const ListImg = styled.img`
  width: 125px;
  padding: 5px;
`;

export const ListDetails = styled.div`
`;
export const ListValue = styled.div`
  padding: 17px 15px;
  text-align: center;
  margin: 5px;
`;

export const IncrementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const IncrementButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;


export const EpTitle = styled.div`
  font-weight: 700;
  text-align: center;
`;

export const CrementButton = styled.button `
  border: 1px solid black;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  &:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 1px #B972E5;
  };
  background-color: #DEC3EF;
  font-family: "Montserrat";
  font-size: 2em;
  &.hidden {
    visibility: hidden;
  }
  padding: 5px;
`