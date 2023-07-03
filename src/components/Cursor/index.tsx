import React, { useState, useEffect } from "react";
import * as S from "./styled";

interface CursorProps {
  hover?: boolean;
}

const Cursor = ({ hover }: CursorProps): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <S.Cursor
      style={{ left: cursorPosition.x + "px", top: cursorPosition.y + "px" }}
      hover={hover}
    />
  );
};

export default Cursor;
