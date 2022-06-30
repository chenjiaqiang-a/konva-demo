import { Image as KonvaImage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';
import Konva from 'konva';

interface Props {
  width: number;
  height: number;
  imgSrc: string;
  opacity?: number;
}

export interface ImageState {
  x?: number;
  y?: number;
  opacity?: number;
  image: HTMLImageElement | undefined;
}

const Mask: React.FC<Props> = ({imgSrc, width, height, opacity}) => {
  const [imgProps, setImgProps] = useState<ImageState>({
    x: 0,
    y: 0,
    opacity: 1,
    image: undefined,
  });
  const imgRef = useRef<Konva.Image>(null);

  useEffect(() => {
    const imgNode = new Image();
    imgNode.src = imgSrc;
    const scale = Math.min(width / imgNode.width, height / imgNode.height);
    imgNode.width *= scale;
    imgNode.height *= scale;
    setImgProps({
      x: (width - imgNode.width) / 2,
      y: (height - imgNode.height) / 2,
      opacity: opacity,
      image: imgNode,
    });
  }, [imgSrc, width, height, opacity]);
  
  return (
    <KonvaImage ref={imgRef} {...imgProps} />
  );
};

export default Mask;
