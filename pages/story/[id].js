import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BookmarksContext } from '../../hooks/use-bookmarks';
import play from '../../public/images/play.png';
import Image from 'next/image';
import Link from 'next/link';
import { StoryContext } from '../stories';

export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);
  const bookmarks = useContext(BookmarksContext);
  const { shortStories, addStory } = useContext(StoryContext);

  let story = shortStories.find((story) => story.id === id);

  return (
    <>
      <h1 className="headline">Selected Story</h1>
      <div className="storyCard">
        Story-Nr. [{id}]<div>{story?.content}</div>
        Bookmark: {bookmarks.isBookmarked(id) ? 'is set' : 'is not set'}
      </div>
      <Link className="playButton" href={`/playedstory/${id}`}>
        <Image className="img" src={play} alt="play" width="50" height="50" />
      </Link>
    </>
  );
}
