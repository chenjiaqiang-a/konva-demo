import React, { useEffect, useRef, useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import konva from 'konva';

export interface ArchorProps {
  width: number;
  height: number;
  x: number;
  y: number;
  label?: string;
  color?: string;
  labelColor?: string;
}

interface TextSize {
  width?: number;
  height?: number;
}

const Archor: React.FC<ArchorProps> = ({
  label = '',
  color,
  labelColor,
  ...pos
}) => {
  const textRef = useRef<konva.Text>(null);
  const [shadow, setShandow] = useState<number>(0);
  const [textSize, setTextSize] = useState<TextSize>({ width: 0, height: 0 });

  useEffect(() => {
    setTextSize({
      width: textRef.current?.width(),
      height: textRef.current?.height(),
    });
  }, []);

  return (
    <Group
      x={pos.x}
      y={pos.y}
      onMouseEnter={() => setShandow(0.7)}
      onMouseLeave={() => setShandow(0)}
    >
      <Rect
        shadowColor={color ? color : '#000'}
        shadowBlur={shadow}
        width={pos.width}
        height={pos.height}
        stroke={color ? color : '#000'}
        strokeWidth={3}
      />
      <Group x={-4} y={-4}>
        <Rect
          fill={color ? color : '#000'}
          {...textSize}
          shadowColor={color ? color : '#000'}
          shadowBlur={shadow}
        />
        <Text
          ref={textRef}
          text={label}
          fontSize={12}
          fill={labelColor ? labelColor : '#fff'}
        />
      </Group>
    </Group>
  );
};

export default Archor;
