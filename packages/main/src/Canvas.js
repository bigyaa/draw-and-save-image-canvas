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
  console.log("canvas");

  useEffect(() => {
    if (!imageLoaded && imageSrc) {
      prepareImage(imageSrc);
    }
    return () => setImageLoaded(false);
  }, []);

  return (
    <div>
      {savingState && <div>Saving..</div>}
      {imageLoaded ? (
        <div id="canvas-container">
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              zIndex: "80",
              width: "50px",
              background: "rgba(255, 255, 255, 0.2)",
              padding: "10px",
            }}
          >
            <ClearCanvasButton />
            <SaveImageButton />
          </div>
          <div>
            <img id="bg-img" src={imageSrc} alt="" />
            <canvas
              id="canvas"
              onMouseDown={startDrawing}
              onMouseUp={finishDrawing}
              onMouseMove={draw}
              ref={canvasRef}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
