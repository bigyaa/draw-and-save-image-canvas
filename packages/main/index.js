import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { useCanvas, CanvasProvider } from "./src/CanvasContext";
import Loading from "./src/Loading";
import ClearCanvasButton from "./src/ClearCanvasButton";
import SaveImageButton from "./src/SaveImageButton";
import Canvas from "./src/Canvas";

ReactDOM.render(
  <div>
    <Suspense fallback={<Loading />}>
      <CanvasProvider>
        <Canvas imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" />
      </CanvasProvider>
    </Suspense>
  </div>,
  document.getElementById("root")
);

// export default {
//   useCanvas,
//   CanvasProvider,
//   Loading,
//   ClearCanvasButton,
//   SaveImageButton,
//   Canvas,
// };
