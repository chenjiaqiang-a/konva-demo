import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const MaskImage: React.FC<Props> = ({}) => {
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
    </div>
  );
};

export default MaskImage;
