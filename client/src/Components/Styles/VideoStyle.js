import styled from 'styled-components';
import ReactPlayer from 'react-player';

const VideoStyle = styled(ReactPlayer)`
  /* border: 1px solid red; */
  width: 500px;
  height: auto;
  max-height: 500px;
  &:hover {
    cursor: pointer;
  };
  margin: 15px 0;
`;

export default VideoStyle;