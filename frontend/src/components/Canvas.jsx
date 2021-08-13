import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import fetchAndSetPredictions from "../services/fetchAndSetPredictions";
import resizeImage from "../services/resizeImage";

export default function Canvas(props) {
  const { setCanvas, setProbabilities, theme, setProbsLoading } = props;
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image != null) {
      fetchAndSetPredictions(image, setProbabilities, setProbsLoading);
    }
    // lint comment to remove "React Hook useEffect has a missing dependency: 'setProbabilities'"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <CanvasDraw
      ref={canvasRef}
      onChange={async (cv) => {
        let b64img = await resizeImage(
          canvasRef.current.canvasContainer.children[1].toDataURL(),
          28,
          28
        );
        //chop off base64 preface
        setImage(b64img.replace(/^data:image\/(png|jpg);base64,/, ""));
        setCanvas(cv);
      }}
      gridColor={theme.palette.secondary.main}
    />
  );
}
