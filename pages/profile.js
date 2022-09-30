import styled from 'styled-components';

export default function profile({ content }) {
  return (
    <>
      <StoryContainer>
        <h2>Personal Profile</h2>
      </StoryContainer>
    </>
  );
}

const StoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
