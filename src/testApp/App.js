import React, { Suspense } from "react";
import Loading from "src/main/Loading";
import Canvas from "../main/Canvas";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas
          imageSrc={
            "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" +
            "?" +
            new Date().getTime()
          }
        />
      </Suspense>
    </>
  );
}

export default App;
