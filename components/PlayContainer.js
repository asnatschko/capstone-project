import Typewriter from 'typewriter-effect';
import { shortStories } from '../pages/stories.js';

export default function PlayContainer({ storyId }) {
  let playedstory = shortStories.find((story) => story.id === storyId);
  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(playedstory.content)
              .pauseFor(700)
              .start();
          }}
        />
      </div>
    </>
  );
}
