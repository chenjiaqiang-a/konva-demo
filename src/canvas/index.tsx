import React from 'react';
import { Stage } from 'react-konva';
import DStarCanvas from './DStarCanvas';
import ImageCanvas from './ImageCanvas';
import MaskCanvas from './MaskCanvas';

export enum CanvasFunc {
  DraggableStars = 'DraggableStars',
  DraggableImage = 'DraggableImage',
  ImageWithMask = 'ImageWithMask',
}

const CanvasComp = {
  [CanvasFunc.DraggableStars]: DStarCanvas,
  [CanvasFunc.DraggableImage]: ImageCanvas,
  [CanvasFunc.ImageWithMask]: MaskCanvas,
};

export interface CanvasProps {
  type: CanvasFunc;
  width: number;
  height: number;
  componentProps?: {
    [key: string]: any;
  };
}

const Canvas: React.FC<CanvasProps> = ({ type, componentProps, ...props }) => {
  const Componet = CanvasComp[type];
  return (
    <Stage
      {...props}
      style={{
        padding: 20,
      }}
    >
      <Componet {...props} {...componentProps} />
    </Stage>
  );
};

export default Canvas;
