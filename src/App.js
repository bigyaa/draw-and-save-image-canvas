import React from "react";
import { Canvas } from "./Canvas";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { SaveImageButton } from "./SaveImageButton";

function App() {
  return (
    <>
      <Canvas />
      <ClearCanvasButton/>
      <SaveImageButton />
    </>
  );
}

export default App;
