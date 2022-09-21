import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

export default function Home() {
  return <h1>Readme - App</h1>;
}

const Button = styled.button`
  margin: 2rem;
  background: yellow;
  color: purple;
`;
