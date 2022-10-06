import { shortStories } from '../pages/stories.js';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function PlayContainer({ storyId }) {
  let playedstory = shortStories.find((story) => story.id === storyId);

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter words={playedstory.content} typeSpeed={100} />
      </div>
    </>
  );
}
