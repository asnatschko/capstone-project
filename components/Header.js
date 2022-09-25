import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>
    </>
  );
}
