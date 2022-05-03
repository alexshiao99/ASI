import styled from 'styled-components';

export const DivAll = styled.div `
  border: 1px solid red;
  width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
`;

export const TitleStyle = styled.div `
  font-size: 1.25em;
  text-align: center;
`
export const TitleStyle2 = styled.div `
  /* font-size: 1.1em; */
  text-align: center;
`

export const PosterStyle = styled.img `
  width: 250px;
  height: auto;
  object-fit: cover;
`;

export const DivImgDeets = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivSyn = styled.div`
  font-size: 0.75em;
  text-align: justify;
  text-justify: inter-word;
  > div {
    font-size: 1.33em;
    font-weight: 700;
  }
`;

export const DivDeets = styled.div`
  flex-grow: 4;
`;

export const Category = styled.div`
  font-weight: 700;
`;

export const Value = styled.div`
  font-size: 0.9em;
  margin-bottom: 15px;
`;
