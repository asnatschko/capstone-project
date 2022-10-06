import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';
import { shortStories } from '../pages/stories.js';

export default function PlayContainer({ storyId }) {
  let playedstory = shortStories.find((story) => story.id === storyId);

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={playedstory.content}
          typeSpeed={80}
        />
        {/* "I have to choose between Typewriter effects))"" { <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(playedstory.content)
              .pauseFor(700)
              .start();
          }}
        /> */}
      </div>
    </>
  );
}
