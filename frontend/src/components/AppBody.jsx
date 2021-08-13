import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import CanvasContainer from "./CanvasContainer";
import ProbabilitiesContainer from "./ProbabilitiesContainer";

export default function AppBody(props) {
  const { theme } = props;
  const [canvas, setCanvas] = useState(null);
  const [probabilities, setProbabilities] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [probsLoading, setProbsLoading] = useState(false);

  return (
    <Box height="90vh" color="text.primary">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ height: "inherit" }}
      >
        <Grid item>
          <CanvasContainer
            theme={theme}
            canvas={canvas}
            setCanvas={setCanvas}
            probabilities={probabilities}
            setProbabilities={setProbabilities}
            setProbsLoading={setProbsLoading}
          />
        </Grid>

        <Grid item>
          <ProbabilitiesContainer
            theme={theme}
            probabilities={probabilities}
            probsLoading={probsLoading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
