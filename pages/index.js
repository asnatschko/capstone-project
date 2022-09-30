import Card from '../components/Card';
import Link from 'next/link';
import styled from 'styled-components';
import { shortStories } from './stories';

export default function Home() {
  const firstStory = shortStories;

  return (
    <>
      <StoryContainer>
        <Card content={firstStory[0].content} id={firstStory[0].id} />
        <div>
          <Link className="nextStoryButton" href="/nextstory">
            Next Story
          </Link>
        </div>
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
