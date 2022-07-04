import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Canvas, { CanvasFunc } from '../canvas';

interface Props {}

const MaskImage: React.FC<Props> = ({}) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  return (
    <div className="mask-image">
      <div className="back-link">
        <Link to="/">Backward</Link>
      </div>
      <h1>Image with Mask</h1>
      <div className="panel">
        Opacity
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
        />
      </div>
      <Canvas
        componentProps={{ scale, opacity }}
        width={600}
        height={600}
        type={CanvasFunc.ImageWithMask}
      />
      <div className="btn-group">
        <button
          onClick={() => setScale(scale + 0.1)}
          style={{ marginRight: 15 }}
        >
          +
        </button>
        <button onClick={() => setScale(scale - 0.1)}>-</button>
      </div>
    </div>
  );
};

export default MaskImage;
