export default function StoryForm({ countStories, onAddStory }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.content.value;

    const newStory = { id: countStories + 1, content: inputValue };

    onAddStory(newStory);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Content">Add another Story</label>
      <br />
      <input className="inputStory" type="text" name="content" id="content" />
      <button className="AddButton">Add Story</button>
    </form>
  );
}
