import React from "react";

export default function Image(props) {
  const { photoData } = props;
  return (
    <div className='img-container'>
      <img src={photoData.url} alt={photoData.title} />
    </div>
  );
}