import React, { useEffect, useState } from "react";
import { useCanvas } from "./CanvasContext";
import "./Canvas.css";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { SaveImageButton } from "./SaveImageButton";

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    addBackgroundImage,
    reload,
    setReload,
  } = useCanvas();

  const [imageLoaded, setImageLoaded] = useState(false);

  const background = new Image();
  background.src =
  "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" +
  "?" +
  new Date().getTime();

  useEffect(() => {
    console.log({ reload });
    setImageLoaded(false);
    background.onload = () => {
      setImageLoaded(true);
      background.setAttribute("crossOrigin", "anonymous");
      prepareCanvas();
      addBackgroundImage(background);
    };
    return () => setImageLoaded(false);
  }, [reload]);

  return (
    <div id="canvas-container">
      {imageLoaded ? (
        <>
          <canvas
            id="canvas"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
          <ClearCanvasButton />
          <SaveImageButton />
        </>
      ) : (
        "Loading Image ..."
      )}
    </div>
  );
}
