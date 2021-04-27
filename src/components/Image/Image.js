import React from 'react';

import './Image.css';

const image = props => (
  <div
    alt={`${props.imageUrl}`}
    className="image"
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center'
    }}
  />
);

export default image;
