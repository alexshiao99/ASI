import styled from 'styled-components';

export const NavBarStyle = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid #9617E5;
  padding: 10px 70px 10px 10px;
`;

export const LogoText = styled.div`
  font-size: 1.5em;
  width: 140px;
  text-align: center;
  border-radius: 5px;
  &:hover {
    text-shadow: 1px 1px 2px #B972E5;
    transition: 0.25s;
    cursor: pointer;
  };
  &.clicked {
    text-shadow: 1px 1px 2px #B972E5;
  }
`;

export const LogoSpan = styled.span`
  padding: 5px 0 0 100px;
  flex-grow: 6;
`;

export const SearchSpan = styled.span`
  padding: 5px 0;
  width: 1px;
  /* border: 1px solid #9617E5; */
  text-align: center;
  flex-grow: 1;
  border-radius: 5px;
  &:hover {
    text-shadow: 1px 1px 2px #B972E5;
    transition: 0.25s;
    cursor: pointer;
  };
  &.clicked {
    text-shadow: 1px 1px 2px #B972E5;
  }
`;

export const SavedSpan = styled.span`
  padding: 5px 0;
  width: 1px;
  border-radius: 5px;
  /* border: 1px solid #9617E5; */
  text-align: center;
  flex-grow: 1;
  &:hover {
    text-shadow: 1px 1px 2px #B972E5;
    transition: 0.25s;
    cursor: pointer;
  };
  &.clicked {
    text-shadow: 1px 1px 2px #B972E5;
  }
`;