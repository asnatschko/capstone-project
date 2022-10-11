import Link from 'next/link';
import home from '../public/home.png';
import Image from 'next/image';
import profile from '../public/images/profile.png';
import book from '../public/images/books.png';
import { useState } from 'react';

export default function Footer() {
  const [isActive, setActive] = useState(0);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="footerBlock">
      <nav>
        <div className='footer-div'>
          <Link href="/">
            <Image
              className="img"
              src={home}
              alt="Home"
              width="30"
              height="30"
              onClick={handleToggle}
            />
          </Link>

          <Link href="/stories">
            <Image
              className="img"
              src={book}
              alt="Stories"
              width="30"
              height="30"
              onClick={handleToggle}
            />
          </Link>

        
          <Link href="/profile">
            <Image
              className="img"
              src={profile}
              alt="Profile"
              width="30"
              height="30"
              onClick={handleToggle}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
