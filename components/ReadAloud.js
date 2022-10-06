import { shortStories } from '../pages/stories';

export default function ReadAloud({ storyId }) {
  let speakedstory = shortStories.find((story) => story.id === storyId);
  let utterance = new SpeechSynthesisUtterance(speakedstory.content);

  let voicesArray = speechSynthesis.getVoices();
  utterance.voice = voicesArray[7];

  speechSynthesis.cancel();
  utterance.pitch = 1;
  utterance.rate = 0.7;
  speechSynthesis.speak(utterance);

  return;
}
