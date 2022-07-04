import React from 'react';
import { Layer } from 'react-konva';
import DraggableImage from './components/DraggableImage';
import Mask from './components/Mask';
import classImg from '../assets/classes.jpg';
import maskImg from '../assets/classes-mask.png';

interface Props {
  width: number;
  height: number;
  scale?: number;
  opacity?: number;
}

const MaskCanvas: React.FC<Props> = ({width, height, scale, opacity}) => {
  return (
    <Layer scaleX={scale} scaleY={scale}>
      <DraggableImage width={width} height={height} imgSrc={classImg}>
        <Mask width={width} height={height} opacity={opacity} imgSrc={maskImg} />
      </DraggableImage>
    </Layer>
  );
};

export default MaskCanvas;
