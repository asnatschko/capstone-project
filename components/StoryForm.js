import { toast } from 'react-toastify';

export default function StoryForm({ countStories, onAddStory }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.content.value;

    const newStory = { id: countStories + 1, content: inputValue };

    if (inputValue.length < 1) {
      toast('🤓 Please type your story!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return false;
    }

    onAddStory(newStory);
    form.reset();
  }

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <label htmlFor="Content">Add another Story</label>
      <br />
      <textarea
        className="inputStory"
        type="text"
        name="content"
        id="content"
        maxLength={500}
      />
      <button className="AddButton">Add Story</button>
    </form>
  );
}
