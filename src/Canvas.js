import React, { useEffect, useState } from "react";
import { useCanvas } from "./CanvasContext";
import "./Canvas.css";

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    addBackgroundImage,
    loading,
  } = useCanvas();

  const [imageLoaded, setImageLoaded] = useState(false);

  const background = new Image();
  background.src =
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" +
    "?" +
    new Date().getTime();

  useEffect(() => {
    background.onload = () => {
      setImageLoaded(true);
      console.log({ imageLoaded });
      background.setAttribute("crossOrigin", "anonymous");
      prepareCanvas();
      addBackgroundImage(background);
    };
  }, []);

  return (
    <div id="canvas-container">
      {/* <img
        id="bg-img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg"
        alt=""
      /> */}
      {imageLoaded && !loading ? (
        <canvas
          id="canvas"
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      ) : (
        "Loading Image ..."
      )}
    </div>
  );
}
