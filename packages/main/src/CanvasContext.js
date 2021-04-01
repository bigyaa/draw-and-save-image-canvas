import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const backgroundRef = useRef(new Image());

  const [imageLoaded, setImageLoaded] = useState(false);
  const [savingState, setSavingState] = useState(false);

  const prepareCanvas = () => {
    const canvas = canvasRef && canvasRef.current;

    if (canvas) {
      canvas.width = window.innerWidth * 2 - 40;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth - 20}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    const context = canvas && canvas.getContext("2d");
    if (context) {
      context.scale(2, 2);
      context.lineCap = "round";
      context.strokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;
    }
  };

  const addBackgroundImage = async () => {
    const canvas = canvasRef && canvasRef.current;
    const context = canvas && canvas.getContext("2d");
    const background = backgroundRef && backgroundRef.current;

    // Make sure the image is loaded first otherwise nothing will draw.
    // background.onload = async function () {
    //when background is a url
    // const canvasElement = document.getElementById("canvas");
    // if (canvasElement && background.current.src) {
    //   canvasElement.style.background = `url('${background.current.src}')`;
    //   canvasElement.style.background && setImageLoaded(true);
    // }
    //when background is an Image
    context.globalCompositeOperation = "destination-over";
    background && (await context.drawImage(background, 0, 0));
    setImageLoaded(true);
    await saveCanvasAsImage();
    // };
    background.onerror = function () {
      alert(new Error("Could not load image at " + background.src));
    };
  };

  const startDrawing = ({ nativeEvent }) => {
    const context = contextRef?.current;
    const { offsetX, offsetY } = nativeEvent;

    context?.beginPath();
    context?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    const context = contextRef?.current;

    context?.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    const context = contextRef?.current;
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    context?.lineTo(offsetX, offsetY);
    context?.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvasAsImage = async () => {
    const canvas = canvasRef && canvasRef.current;

    if (imageLoaded && canvas) {
      const image = await canvas.toDataURL("image/png");
      // .replace("image/png", "image/octet-stream");

      const anchorElement = document.getElementById("download-image");
      if (anchorElement) {
        anchorElement.href = image;
        setSavingState(false);

        anchorElement.click();
      }
    }
  };

  const prepareImage = async (imageSrc) => {
    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.src = imageSrc;
      backgroundRef.current.onload = async () => {
        setImageLoaded(true);
        await backgroundRef.current.setAttribute("crossOrigin", "anonymous");
        await prepareCanvas();
      };

      backgroundRef.current.onerror = function () {
        alert(
          new Error("Could not load image at " + backgroundRef.current.src)
        );
      };
    }
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        backgroundRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        saveCanvasAsImage,
        addBackgroundImage,
        imageLoaded,
        setImageLoaded,
        savingState,
        setSavingState,
        prepareImage,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
