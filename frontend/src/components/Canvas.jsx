import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

export default function Canvas(props) {
  const { setCanvas, setProbabilities, theme, setProbsLoading } = props;
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image != null) {
      //uncomment console.log(s) to see what goes in and out of backend
      //console.log(image);
      setProbsLoading(true);
      async function setPredictions() {
        fetch("http://localhost:3001/api/getPrediction", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ base64img: image }),
        })
          .then((response) => response.json())
          .then((jsonData) => {
            setProbabilities(jsonData.prediction[0]);
            setProbsLoading(false);
            //console.log(jsonData.prediction[0]);
          });
      }
      setPredictions();
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

// could be in its own file
// complete credit to Muddy Mouse on codegrepper
// link: https://www.codegrepper.com/code-examples/javascript/javascript+resize+image+base64
function resizeImage(base64Str, maxWidth, maxHeight) {
  return new Promise((resolve) => {
    let img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let canvas = document.createElement("canvas");
      const MAX_WIDTH = maxWidth;
      const MAX_HEIGHT = maxHeight;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL());
    };
  });
}
