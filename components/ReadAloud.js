import { StoryContext } from '../pages/stories';
import { useContext } from 'react';

export default function ReadAloud({ storyId }) {
  const { shortStories } = useContext(StoryContext);
  let speakedstory = shortStories.find((story) => story.id === storyId);
  let utterance = new SpeechSynthesisUtterance(speakedstory.content);

  let voicesArray = speechSynthesis.getVoices();
  utterance.voice = voicesArray[6];

  speechSynthesis.cancel();
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);

  return;
}
