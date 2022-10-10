import Link from 'next/link';

export default function StoryItem({ id, content, onRemoveStory }) {
  
  return (
    <li>
      <label>
        <Link href={`/story/${id}`}>{content}</Link>
      </label>
      <button className="removeButton" onClick={() => onRemoveStory(id)}>
        Delete
      </button>
    </li>
  );
}
