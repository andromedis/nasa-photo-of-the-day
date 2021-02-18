import React from "react";
import styled from 'styled-components';

const StyledImage = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  img {
    max-width: 100%;
  }
`

export default function Image(props) {
  const { photoData } = props;
  return (
    <StyledImage className='img-container'>
      <img src={photoData.url} alt={photoData.title} />
    </StyledImage>
  );
}