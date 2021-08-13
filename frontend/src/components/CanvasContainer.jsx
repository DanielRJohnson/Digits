import React from "react";
import { Card, CardContent, Button, ButtonGroup } from "@material-ui/core";
import Canvas from "./Canvas";

export default function CanvasContainer(props) {
  const {
    theme,
    canvas,
    setCanvas,
    probabilities,
    setProbabilities,
    setProbsLoading,
  } = props;
  return (
    <Card
      raised
      style={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <CardContent>
        <Canvas
          setCanvas={setCanvas}
          setProbabilities={setProbabilities}
          theme={theme}
          setProbsLoading={setProbsLoading}
        />
        <ButtonGroup color="primary" style={{ paddingTop: "16px" }}>
          <Button
            variant="contained"
            onClick={() => {
              canvas.clear();
              setProbabilities(probabilities.map(() => 0));
            }}
          >
            Clear
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
