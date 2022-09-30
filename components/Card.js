import ButtonBookmark from './ButtonBookmark';
import Link from 'next/link';

export default function Card({ id, content }) {
  return (
    <>
      <ButtonBookmark id={id} />
      <Link href={`/story/${id}`}>
        <li>{content}</li>
      </Link>
    </>
  );
}
