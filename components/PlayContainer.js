import Typewriter from 'typewriter-effect';
import { shortStories } from '../pages/stories';
import { id } from '../pages/story/[id]';

export default function PlayContainer() {
  let playedstory = shortStories.find((story) => story.id === id);
  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString('Once upon a time there was a girl.')
              .pauseFor(500)
              .typeString(' She liked playing with her sister.')
              .pauseFor(500)
              .typeString(
                'And one day, when their parents were gone, they found a secret room in the house.'
              )
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
    </>
  );
}
