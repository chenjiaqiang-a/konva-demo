import React, { useState } from 'react';
import { Star } from 'react-konva';

export interface DraggableStarProps {
  id: string;
  x: number;
  y: number;
  rotation: number;
}

const DraggableStar: React.FC<DraggableStarProps> = (props) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  return (
    <Star
      {...props}
      numPoints={5}
      innerRadius={20}
      outerRadius={40}
      fill="#89b717"
      opacity={0.8}
      draggable
      shadowColor="black"
      shadowBlur={10}
      shadowOpacity={0.6}
      shadowOffsetX={isDragging ? 10 : 5}
      shadowOffsetY={isDragging ? 10 : 5}
      scaleX={isDragging ? 1.2 : 1}
      scaleY={isDragging ? 1.2 : 1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    />
  );
};

export default DraggableStar;
