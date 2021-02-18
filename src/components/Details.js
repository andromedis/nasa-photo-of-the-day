import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  max-width: 800px;
`

function Details(props) {
  const { photoData } = props;

  return (
    <StyledDetails className='img-details'>
      <h2 className='title'>{photoData.title}</h2>
      <p className='explanation'>{photoData.explanation}</p>
      <a className='hi-def-link' href={photoData.hdurl}>Hi-Def Version</a>
      {
        photoData.copyright && <p className='copyright'>© {photoData.copyright}</p>
      }
      <p className='date'>{photoData.date}</p>
    </StyledDetails>
  );
}

export default Details;