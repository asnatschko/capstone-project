import Typewriter from 'typewriter-effect';
import { id } from '../pages/story/[id].js';
import { shortStories } from '../pages/stories.js';

export default function PlayContainer() {
  // let playstory = shortStories.find((story) => story.id === id);

  function getId(shortStories, id) {
    let obj = shortStories.filter(function (val) {
      return val.id === id;
    });
    return obj[0];
  }

  return (
    <>
      <h2>Read and Listen</h2>
      <div className="playingstory">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString('Once upon a time there was a girl.')
              .pauseFor(700)
              .typeString(' She liked playing with her sister.')
              .pauseFor(700)
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
