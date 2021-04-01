import React from "react";
import { useCanvas } from "./CanvasContext";

const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <>
      <img
        src={require("./images/delete.svg")}
        width="40px"
        height="40px"
        style={{
          marginBottom: "8px",
          marginTop: "8px",
        }}
        onClick={clearCanvas}
        alt="Clear Canvas"
      />
    </>
  );
};

export default ClearCanvasButton;
