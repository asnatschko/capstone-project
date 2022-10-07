import Card from '../components/Card';
import styled from 'styled-components';
import { shortStories } from './stories';

export default function nextStory() {
  const otherStory = shortStories;

  return (
    <>
      <StoryContainer>
        <h2>Other Story</h2>
        <Card content={otherStory[1].content} id={otherStory[1].id} />
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
