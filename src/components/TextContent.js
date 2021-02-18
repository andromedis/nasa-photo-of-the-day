import React from 'react';
import styled from 'styled-components';

import Details from './Details';

const StyledTextContent = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  max-width: 800px;
`

function TextContent(props) {
  const { photoData } = props;

  return (
    <StyledTextContent>
      <Details photoData={photoData} ></Details>
      <p className='date'>{photoData.date}</p>
    </StyledTextContent>
  );
}

export default TextContent;