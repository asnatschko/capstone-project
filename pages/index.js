import Card from '../components/Card';
import Link from 'next/link';
import styled from 'styled-components';
import { shortStories } from './stories';
import { useContext } from 'react';
import { StoryContext } from './stories';

export default function Home() {
  

  return (
    <>
      <StoryContainer>
        <h2>Welcome to the Readme-App!</h2>
        <div className='intro'> create, read and listen your stories</div>
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
