import React from 'react';
import { ModalStyle, LoadingStyle } from './Styles/ModalStyle.js';

function LoadingModal ({ modal }) {
  return (
    <>
      {modal ? (
        <ModalStyle>
          <LoadingStyle src='./assets/loading.gif' />}
        </ModalStyle>
      )
      : null}
    </>
  )
}

export default LoadingModal;