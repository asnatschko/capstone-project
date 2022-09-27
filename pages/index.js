import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Readme-App</h1>

      <Card content="Once upon a time there was a girl. She liked playing with her sister. And one day, when their parents were gone, they found a secret room in the house." />
      <div>
        <Link className="nextStoryButton" href="/nextstory">
          Next Story
        </Link>
      </div>
    </>
  );
}
