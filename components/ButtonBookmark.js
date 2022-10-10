import Image from 'next/image';
import { useContext } from 'react';
import bookmark from '../public/images/bookmark.png';
import bookmark_filled from '../public/images/bookmark_filled.png';
import { BookmarksContext } from '../hooks/use-bookmarks';

export default function ButtonBookmark({ id }) {
  const bookmarks = useContext(BookmarksContext);

  const isBookmarked = bookmarks.isBookmarked(id);

  function toggleBookmark() {
    if (isBookmarked) {
      bookmarks.unBookmarkStory(id);
    } else {
      bookmarks.bookmarkStory(id);
    }
  }

  return (
    <button className="buttonBookmark" onClick={toggleBookmark}>
      <Image src={isBookmarked ? bookmark_filled : bookmark} alt="Bookmark" />
    </button>
  );
}
