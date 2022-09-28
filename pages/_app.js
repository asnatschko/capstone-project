import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { BookmarksContextProvider } from '../components/use-bookmarks';

function MyApp({ Component, pageProps }) {
  return (
    <div id="_app">
      <BookmarksContextProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BookmarksContextProvider>
    </div>
  );
}

export default MyApp;
