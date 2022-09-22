import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <h1>Readme - App</h1>
      <ul>
        <li>
          Olaf ist das faulste Pferd das es gibt. Er macht krank, doch als Anna
          das Reitkind vor ihm steht und weint, bekommt er ein schlechtes
          Gewissen. Hier in meiner lustigen Kindergeschichte erfahrt ihr, wie es
          ausgeht.
        </li>
      </ul>
    </>
  );
}

const Button = styled.button`
  margin: 2rem;
  background: yellow;
  color: purple;
`;
