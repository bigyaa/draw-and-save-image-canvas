import React from "react";
import { useCanvas } from "./CanvasContext";

export const SaveImageButton = (background) => {
  const { saveCanvasAsImage } = useCanvas();

  return (
    <button
      style={{
        zIndex: 22,
      }}
      onClick={() => saveCanvasAsImage(background)}
    >
      Save Image
    </button>
  );
};
