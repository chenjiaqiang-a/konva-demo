import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <div className="home">
      <h1>There are some demos for react-konva</h1>
      <ul>
        <li><Link to='/draggable-stars'>Draggable Stars</Link></li>
        <li><Link to='/draggable-image'>Draggable Image</Link></li>
        <li><Link to='/image-with-mask'>Image with Mask</Link></li>
      </ul>
    </div>
  );
};

export default Home;
