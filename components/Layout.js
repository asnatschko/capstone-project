import Footer from './Footer';
import Navigation from './Header';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
