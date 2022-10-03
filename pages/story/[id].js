import { useRouter } from 'next/router';
import { shortStories } from '../stories';
import { useContext } from 'react';
import { BookmarksContext } from '../../hooks/use-bookmarks';
import play from '../../public/images/play.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);
  const bookmarks = useContext(BookmarksContext);

  let story = shortStories.find((story) => story.id === id);

  return (
    <>
      <h1 className="headline">Selected Story</h1>
      <div className="storyCard">
        Story-Nr. [{id}]<div>{story?.content}</div>
        Bookmark: {bookmarks.isBookmarked(id) ? 'is set' : 'is not set'}
      </div>
      <Link className="playButton" href="/playedstory">
        <Image src={play} alt="play" width="32" height="32" />
      </Link>
    </>
  );
}
