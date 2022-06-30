import React, { useEffect, useState } from 'react';
import { Layer, Text } from 'react-konva';
import DraggableStar, { DraggableStarProps } from './components/DraggableStar';

interface Props {
  width: number;
  height: number;
}

const DStarCanvas: React.FC<Props> = (props) => {
  const [stars, setStars] = useState<DraggableStarProps[]>([]);

  useEffect(() => {
    const randomStars = [...Array(10)].map(
      (_, i): DraggableStarProps => ({
        id: i.toString(),
        x: Math.random() * props.width,
        y: Math.random() * props.height,
        rotation: Math.random() * 180,
      })
    );
    setStars(randomStars);
  }, [props]);
  return (
    <Layer>
      <Text x={10} y={10} text="Try to drag a star" />
      {stars.map((star) => (
        <DraggableStar key={star.id} {...star} />
      ))}
    </Layer>
  );
};

export default DStarCanvas;
