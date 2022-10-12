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
    <form className="inputForm" onSubmit={handleSubmit}>
      <label htmlFor="Content">Add another Story</label>
      <br />
      <textarea className="inputStory" type="textarea" name="content" id="content" />
      <button className="AddButton">Add Story</button>
    </form>
  );
}
