import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { BookmarksContextProvider } from '../hooks/use-bookmarks';
import { StoryContextProvider } from './stories';

function MyApp({ Component, pageProps }) {
  return (
    <div id="_app">
      <BookmarksContextProvider>
        <StoryContextProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoryContextProvider>
      </BookmarksContextProvider>
    </div>
  );
}

export default MyApp;
