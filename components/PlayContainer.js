import { shortStories } from '../pages/stories.js';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function PlayContainer({ storyId }) {
  let playedstory = shortStories.find((story) => story.id === storyId);

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(playedstory.content).start();
          }}
        />
      </div>
    </>
  );
}
