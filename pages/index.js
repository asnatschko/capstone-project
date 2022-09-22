import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Readme - App</h1>

      <Card />
      <Link href="/nextstory">Next Story</Link>
    </>
  );
}
