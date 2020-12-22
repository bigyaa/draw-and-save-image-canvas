import React from "react";
import { useCanvas } from "./CanvasContext";

export const SaveImageButton = () => {
  const { saveCanvasAsImage } = useCanvas();

  return (
    <button
      style={{
        zIndex: 22,
      }}
      onClick={saveCanvasAsImage}
    >
      Save Image
    </button>
  );
};
