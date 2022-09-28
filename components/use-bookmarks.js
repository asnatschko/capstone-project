import { createContext, useState } from 'react';

export const BookmarksContext = createContext()

export function BookmarksContextProvider({children}) {
    const bookmarks = useBookmarks();
    return <BookmarksContext.Provider value={bookmarks}>
        {children}
    </BookmarksContext.Provider>    
}

export function useBookmarks() {
  const [state, setState] = useState([]);

  const bookmarkStory = (id) => {
    setState([...state, id]);
  };

  const unBookmarkStory = (id) => {
    setState([...state.filter((x) => x !== id)]);
  };

  const isBookmarked = (id) => {
    return state.includes(id);
  };

  console.log(state);

  return {
    state,
    bookmarkStory,
    isBookmarked,
    unBookmarkStory,
  };
}
