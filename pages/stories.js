import Card from '../components/Card';
import styled from 'styled-components';
import { useState } from 'react';

export const shortStories = [
  {
    id: 1,
    content:
      'Once upon a time there was a girl. She liked playing with her sister. And one day, when their parents were gone, they found a secret room in the house.',
    //isRead: false,
  },
  {
    id: 2,
    content:
      "The sun is shining. Skies are blue. The ocean is rendering it's waves",
    //isRead: false,
  },
  {
    id: 3,
    content:
      'An old man was walking in a deep forest. He went the wrong way. Totally exhausted, he saw a bank and took a seat',
    //isRead: false,
  },
  {
    id: 4,
    content:
      'An old man was walking in a deep forest. He went the wrong way. Totally exhausted, he saw a bank and took a seat',
    //isRead: false,
  },
];

export default function Stories() {
  return (
    <>
      <StoryContainer>
        <div className="headline">Stories</div>
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
  margin: 0 auto;
`;
