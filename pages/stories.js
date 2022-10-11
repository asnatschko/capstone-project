import Card from '../components/Card';
import styled from 'styled-components';
import { createContext, useContext, useState } from 'react';

const shortStories = [
  {
    id: 1,
    content:
      'Once upon a time there was a girl. She liked playing with her sister. And one day, when their parents were gone, they found a secret room in the house.',
  },
  {
    id: 2,
    content:
      "The sun is shining. Skies are blue. The ocean is rendering it's waves.",
  },
  {
    id: 3,
    content:
      'An old man was walking in a deep forest. He went the wrong way. Totally exhausted, he saw a bank and took a seat.',
  },
];

export function useStories() {
  const [storyList, setStories] = useState(shortStories);

  function addStory(newBlock) {
    let shortStories = [...storyList];
  
    shortStories.push(newBlock);
    setStories(shortStories);
  }

function removeStoryById(id) {
    let index = storyList.findIndex((x) => x.id === id);
    if (index >= 0) {
      let shortStories = [...storyList];
      shortStories = shortStories.splice(index, 1);
    }
    
    setStories(shortStories);
   
  }

  return { shortStories: storyList, addStory, removeStoryById };
}

export const StoryContext = createContext();

export function StoryContextProvider({ children }) {
  const stories = useStories();
  return (
    <StoryContext.Provider value={stories}>{children}</StoryContext.Provider>
  );
}

export default function Stories() {
  const { shortStories } = useContext(StoryContext);
  return (
    <>
      <StoryContainer>
        <h2>Stories</h2>
        <div className="list">
          <ul>
            {shortStories.map((story) => {
              return (
                <Card id={story.id} key={story.id} content={story.content} />
              );
            })}
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
