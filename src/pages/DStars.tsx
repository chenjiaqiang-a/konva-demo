import React from 'react';
import { Link } from 'react-router-dom';
import Canvas, { CanvasFunc } from '../canvas';

interface Props {}

const DStars: React.FC<Props> = ({}) => {
  return (
    <div className="d-stars">
      <div className="back-link">
        <Link to="/">Backward</Link>
      </div>
      <h1>Draggable Stars</h1>
      <Canvas width={600} height={600} type={CanvasFunc.DraggableStars} />
    </div>
  );
};

export default DStars;
