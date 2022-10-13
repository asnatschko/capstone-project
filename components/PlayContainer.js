import { StoryContext, useStories } from '../pages/stories.js';
import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';



export default function PlayContainer({ storyId }) {
  const { shortStories } = useContext(StoryContext);
  let playedstory = shortStories.find((story) => story.id === storyId);
  let a;
  function bla(s) {
    a = s ;
  }

  function stop() {
    a.pause()
    speechSynthesis.pause();
  }

  function play() {
    a.start()
    speechSynthesis.resume();
  }  

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          options={{ delay: 65 }}
          onInit={(typewriter) => {
            typewriter.typeString(playedstory.content).start();
            bla(typewriter)
          }}
        />
        <button onClick={stop}>Pause</button>
        <button onClick={play}>Continue</button>
      </div>
    </>
  );
}
