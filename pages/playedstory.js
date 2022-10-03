import styled from 'styled-components';
import PlayContainer from '../components/PlayContainer';

export default function playedstory() {
  return (
    <StoryContainer>
      <PlayContainer />
    </StoryContainer>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
