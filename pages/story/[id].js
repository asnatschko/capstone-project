import { useRouter } from 'next/router';
import { shortStories } from '../stories';
import { useContext } from 'react';
import { BookmarksContext } from '../../hooks/use-bookmarks';

export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);
  const bookmarks = useContext(BookmarksContext);

  let story = shortStories.find((story) => story.id === id);

  return (
    <>
      <h1 className="headline">Single Story</h1>
      <div className="storyCard">
        Story [{id}]<div>{story?.content}</div>
        Bookmark: {bookmarks.isBookmarked(id) ? 'is set' : 'is not set'}
      </div>
    </>
  );
}
