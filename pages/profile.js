import styled from 'styled-components';
import { useState } from 'react';
import StoryForm from '../components/StoryForm';
import StoryItem from '../components/StoryItem';
import { useContext } from 'react';
import { StoryContext, useStories } from './stories';

export default function profile() {
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
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
