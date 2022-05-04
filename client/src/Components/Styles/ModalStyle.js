import styled from 'styled-components';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.40);
  z-index: 90;
`;

export const LoadingStyle = styled.img`
  position: fixed;
  width: 50vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
`