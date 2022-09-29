import Card from '../components/Card';
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <StoryContainer>
        <Card content="Once upon a time there was a girl. She liked playing with her sister. And one day, when their parents were gone, they found a secret room in the house." />
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
