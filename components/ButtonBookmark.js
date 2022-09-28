import Image from 'next/image';
import { useContext, useState } from 'react';
import bookmark from '../public/images/bookmark.png';
import bookmark_filled from '../public/images/bookmark_filled.png';
import {BookmarksContext} from '../components/use-bookmarks'

export default function ButtonBookmark({ id }) {
  // const [isBookmarked, setIsBookmarked] = useState();
  const bookmarks = useContext(BookmarksContext)

  const isBookmarked = bookmarks.isBookmarked(id);

  function toggleBookmark() {
    //setIsBookmarked(!isBookmarked);
    if (isBookmarked) {
      bookmarks.unBookmarkStory(id);
    } else {
      bookmarks.bookmarkStory(id);
    }
  }

  return (
    <button className="buttonBookmark" onClick={toggleBookmark}>
      <Image src={isBookmarked ? bookmark_filled : bookmark} />
    </button>
  );
}
