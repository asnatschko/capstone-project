import Link from 'next/link';
import home from '../public/home.png';
import Image from 'next/image';
import profile from '../public/images/profile.png';
import book from '../public/images/books.png';

export default function Footer() {
  return (
    <div>
      <nav>
        <footer>
          <Link href="/">
            <Image
              className="img"
              src={home}
              alt="Home"
              width="30"
              height="30"
            />
          </Link>
          <Link href="/stories">Stories</Link>
          <Link href="/profile">Profile</Link>
        </footer>
      </nav>
    </div>
  );
}
