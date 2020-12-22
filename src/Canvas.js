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
    imageLoaded,
    setImageLoaded,
  } = useCanvas();


  const background = new Image();
  background.src =
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" +
    "?" +
    new Date().getTime();

  useEffect(() => {
    setImageLoaded(false);

    background.onload = () => {
      setImageLoaded(true);
      background.setAttribute("crossOrigin", "anonymous");
      prepareCanvas();
      // addBackgroundImage(background);
    };
    return () => setImageLoaded(false);
  }, []);

  return (
    <div id="canvas-container">
      {imageLoaded ? (
        <>
          <img id="bg-img" src={background.src} alt="" />
          <canvas
            id="canvas"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
          <ClearCanvasButton />
          <SaveImageButton image={background} />
        </>
      ) : (
        "Loading Image ..."
      )}
    </div>
  );
}
