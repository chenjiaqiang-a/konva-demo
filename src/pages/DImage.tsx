import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Canvas, { CanvasFunc } from '../canvas';

interface Props {}

const DImage: React.FC<Props> = ({}) => {
  const [scale, setScale] = useState(1);

  return (
    <div className="d-image">
      <div className="back-link">
        <Link to="/">Backward</Link>
      </div>
      <h1>Draggable Image</h1>
      <Canvas  componentProps={{scale}} width={600} height={600} type={CanvasFunc.DraggableImage} />
      <div className="btn-group">
        <button onClick={() => setScale(scale+0.1)} style={{marginRight: 15}}>+</button>
        <button onClick={() => setScale(scale-0.1)}>-</button>
      </div>
    </div>
  );
};

export default DImage;
