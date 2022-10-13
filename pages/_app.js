import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { BookmarksContextProvider } from '../hooks/use-bookmarks';
import { StoryContextProvider } from './stories';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <div id="_app">
      <BookmarksContextProvider>
        <StoryContextProvider>
          <GlobalStyle />
          <Layout>
            <ToastContainer/>
            <Component {...pageProps} />
          </Layout>
        </StoryContextProvider>
      </BookmarksContextProvider>
    </div>
  );
}

export default MyApp;
