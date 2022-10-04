import styled from 'styled-components';
import PlayContainer from '../../components/PlayContainer';
import { useRouter } from 'next/router';

export default function Playedstory() {
  const router = useRouter();
  const id = Number(router.query.id);
  if (!id) {
    return 'Loading...';
  }
  return (
    <StoryContainer>
      <PlayContainer storyId={id} />
    </StoryContainer>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
