import React from "react";
import { useCanvas } from "./CanvasContext";

const SaveImageButton = () => {
  const { addBackgroundImage, setSavingState } = useCanvas();

  const handleSave = async () => {
    setSavingState(true);
    await addBackgroundImage();
  };

  return (
    <>
      <img
        src={require("./images/download.svg")}
        width="50px"
        height="50px"
        // style={{
        //   zIndex: 22,
        //   position: "relative",
        // }}
        onClick={handleSave}
      />
      {/* Save Image
      </button> */}
      <a
        id="download-image"
        download={"snap" + new Date().getTime()}
        hidden
      ></a>
    </>
  );
};

export default SaveImageButton;
