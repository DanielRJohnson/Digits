import React, { useState } from "react";
import Canvas from "./Canvas";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  ButtonGroup,
  LinearProgress,
  Typography,
} from "@material-ui/core";

export default function CanvasContainer(props) {
  const { theme } = props;
  const [canvas, setCanvas] = useState(null);
  const [probabilities, setProbabilities] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [probsLoading, setProbsLoading] = useState(false);
  //seperate cards
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
                    setProbabilities(probabilities.map((thing) => 0));
                  }}
                >
                  Clear
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card
            raised
            style={{
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <CardContent>
              {probabilities.map((prob, index) => (
                <span
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    {index + " : " + prob.toFixed(2)}
                  </Typography>
                  {!probsLoading ? (
                    <LinearProgress
                      color="primary"
                      value={prob * 100}
                      variant={"determinate"}
                      style={{
                        height: 10,
                        width: 400,
                        margin: "10px 10px",
                      }}
                    />
                  ) : (
                    <LinearProgress
                      color="primary"
                      style={{ height: 10, width: 400, margin: "5px 10px" }}
                    ></LinearProgress>
                  )}
                </span>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
