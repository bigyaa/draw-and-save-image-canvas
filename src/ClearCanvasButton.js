import React from "react";
import { useCanvas } from "./CanvasContext";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button
      style={{
        zIndex: 22,
        marginLeft: "70%",
      }}
      onClick={clearCanvas}
    >
      Clear Canvas
    </button>
  );
};
