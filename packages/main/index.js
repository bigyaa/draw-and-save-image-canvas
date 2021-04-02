import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { useCanvas, CanvasProvider } from "./src/CanvasContext";
import Loading from "./src/Loading";
import ClearCanvasButton from "./src/ClearCanvasButton";
import SaveImageButton from "./src/SaveImageButton";
import Canvas from "./src/Canvas";

const MainApp = ({
  imageSrc = "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg",
}) => (
  <div>
    <Suspense fallback={<Loading />}>
      <CanvasProvider>
        <Canvas imageSrc={imageSrc} />
      </CanvasProvider>
    </Suspense>
  </div>
);

ReactDOM.render(<MainApp />, document.getElementById("root"));

export default MainApp;
