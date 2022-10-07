import { shortStories } from '../pages/stories.js';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function PlayContainer({ storyId }) {
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
