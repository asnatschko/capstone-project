import styled from 'styled-components';
import StoryForm from '../components/StoryForm';
import StoryItem from '../components/StoryItem';
import { useContext } from 'react';
import { StoryContext } from './stories';

export default function Profile() {
  const {
    shortStories: storyList,
    addStory,
    removeStoryById,
  } = useContext(StoryContext);

  return (
    <>
      <StoryContainer>
        <h2>Personal Stories</h2>

        <StoryForm countStories={storyList.length} onAddStory={addStory} />
        <div className='list'>
          <ul>
            {storyList.map((story) => (
              <StoryItem
                id={story.id}
                key={story.id}
                content={story.content}
                onRemoveStory={removeStoryById}
              />
            ))}
          </ul>
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
