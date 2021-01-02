import React from "react";
import { useCanvas } from "./CanvasContext";

const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button
      style={{
        zIndex: 22,
        marginLeft: "70%",
        position: "relative",
      }}
      onClick={clearCanvas}
    >
      Clear Canvas
    </button>
  );
};

export default ClearCanvasButton;
