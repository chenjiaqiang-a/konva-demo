import React, { ReactNode, useEffect, useState } from 'react';
import { Group, Image as KonvaImage } from 'react-konva';

interface Props {
  width: number;
  height: number;
  imgSrc: string;
  children?: ReactNode;
}

interface ImageState {
  x?: number;
  y?: number;
  image: HTMLImageElement | undefined;
}

const DraggableImage: React.FC<Props> = ({ width, height, imgSrc, children }) => {
  const [imgProps, setImgProps] = useState<ImageState>({
    x: 0,
    y: 0,
    image: undefined,
  });

  useEffect(() => {
    const imgNode = new Image();
    imgNode.src = imgSrc;
    const scale = Math.min(width / imgNode.width, height / imgNode.height);
    imgNode.width *= scale;
    imgNode.height *= scale;
    setImgProps({
      x: (width - imgNode.width) / 2,
      y: (height - imgNode.height) / 2,
      image: imgNode,
    });
  }, [imgSrc, width, height]);

  return (
    <Group draggable x={imgProps.x} y={imgProps.y}>
      <KonvaImage image={imgProps.image} />
      {children}
    </Group>
  );
};

export default DraggableImage;
