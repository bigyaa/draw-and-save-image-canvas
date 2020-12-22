import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const addBackgroundImage = (background) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function () {
      setImageLoaded(true);
      context.drawImage(background, 0, 0);
    };
    background.onerror = function () {
      alert(new Error("Could not load image at " + background.src));
    };
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvasAsImage = (background) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    setImageLoaded(false);
    background && addBackgroundImage(background);

    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    window.location.href = image;
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        saveCanvasAsImage,
        addBackgroundImage,
        imageLoaded,
        setImageLoaded,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
