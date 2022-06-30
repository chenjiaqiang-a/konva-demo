import React, { useEffect, useState } from 'react';
import { Layer } from 'react-konva';
import DraggableImage from './components/DraggableImage';
import testImg from '../assets/testImg.jpg';
import Archor, { ArchorProps } from './components/Archor';

interface Props {
  width: number;
  height: number;
  scale?: number;
}

const ImageCanvas: React.FC<Props> = ({ width, height, scale }) => {
  const [archor, setArchor] = useState<ArchorProps>({
    x: 120,
    y: 50,
    width: 220,
    height: 300,
    label: 'face',
    color: 'blue',
  });

  return (
    <Layer scaleX={scale} scaleY={scale}>
      <DraggableImage width={width} height={height} imgSrc={testImg}>
        <Archor {...archor} />
      </DraggableImage>
    </Layer>
  );
};

export default ImageCanvas;
