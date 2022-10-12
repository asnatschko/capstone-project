import Link from 'next/link';
import Image from 'next/image';
import trash from '../public/images/trash-can.png';

export default function StoryItem({ id, content, onRemoveStory }) {
  return (
    <div className="list">
      <Link href={`/story/${id}`}>
        <li>{content}</li>
      </Link>
      <div className="trash">
        <button className="removeButton" onClick={() => onRemoveStory(id)}>
          <Image
            className="img"
            src={trash}
            alt="Delete"
            width="30"
            height="30"
          />
        </button>
      </div>
    </div>
  );
}
