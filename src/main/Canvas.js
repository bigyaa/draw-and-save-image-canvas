import React, { useEffect, useRef, useState } from "react";
import { useCanvas } from "./CanvasContext";
import "./Canvas.css";
import Loading from "./Loading";

const ClearCanvasButton = React.lazy(() => import("./ClearCanvasButton"));
const SaveImageButton = React.lazy(() => import("./SaveImageButton"));

export default function Canvas({ imageSrc }) {
  const {
    canvasRef,
    startDrawing,
    finishDrawing,
    draw,
    imageLoaded,
    setImageLoaded,
    savingState,
    prepareImage,
  } = useCanvas();

  useEffect(() => {
    if (!imageLoaded && imageSrc) {
      prepareImage(imageSrc);
    }
    return () => setImageLoaded(false);
  }, []);

  return (
    <>
      {savingState && <div>Saving..</div>}
      {imageLoaded ? (
        <div id="canvas-container">
          <img id="bg-img" src={imageSrc} alt="" />
          <canvas
            id="canvas"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
          <ClearCanvasButton />
          <SaveImageButton/>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
