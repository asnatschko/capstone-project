import Card from '../components/Card';
import styled from 'styled-components';

export default function nextStory() {
  return (
    <>
      <StoryContainer>
        <h2>Other Story</h2>
        <Card content='The sun is shining. Skies are blue. The ocean is rendering it"s waves' />
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
