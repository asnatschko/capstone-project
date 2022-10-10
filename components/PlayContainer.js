import { StoryContext, useStories } from '../pages/stories.js';
import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';

export default function PlayContainer({ storyId }) {
  const { shortStories } = useContext(StoryContext);
  console.log(shortStories);
  let playedstory = shortStories.find((story) => story.id === storyId);

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          options={{ delay: 65 }}
          onInit={(typewriter) => {
            typewriter.typeString(playedstory.content).start();
          }}
        />
      </div>
    </>
  );
}
