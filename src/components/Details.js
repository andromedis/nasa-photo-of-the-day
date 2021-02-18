import React from "react";

function Details(props) {
  const { photoData } = props;

  return (
    <div className='img-details'>
      <h2 className='title'>{photoData.title}</h2>
      <p className='explanation'>{photoData.explanation}</p>
      <a className='hi-def-link' href={photoData.hdurl}>Hi-Def Version</a>
      {
        photoData.copyright && <p className='copyright'>© {photoData.copyright}</p>
      }
      <p className='date'>{photoData.date}</p>
    </div>
  );
}

export default Details;