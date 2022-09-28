import { useRouter } from 'next/router';
import { shortStories } from '../stories';
import { useContext } from 'react';
import { BookmarksContext } from '../../components/use-bookmarks';

export default function Page() {
  const router = useRouter();
  let id = Number(router.query.id);
  const bookmarks = useContext(BookmarksContext);

  let story = shortStories.find((x) => x.id === id);

  return (
    <div>
      hi [{id}]<div>{story?.content}</div>
      BB: {bookmarks.isBookmarked(id) ? 'bb yes' : 'nope'}
    </div>
  );
}
