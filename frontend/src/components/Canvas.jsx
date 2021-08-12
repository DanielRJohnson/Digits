import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

export default function Canvas(props) {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image != null) console.log(image);
  }, [image]);

  return (
    <CanvasDraw
      ref={canvasRef}
      onChange={async (e) => {
        let b64img = await resizeImage(
          canvasRef.current.canvasContainer.children[1].toDataURL(),
          32,
          32
        );
        //chop off base64 preface
        setImage(b64img.replace(/^data:image\/(png|jpg);base64,/, ""));
        //send image to backend, blah blah
      }}
    />
  );
}

// complete credit to Muddy Mouse on codegrepper
// link: https://www.codegrepper.com/code-examples/javascript/javascript+resize+image+base64
function resizeImage(base64Str, maxWidth = 400, maxHeight = 350) {
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
