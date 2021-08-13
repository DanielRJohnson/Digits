import React from "react";
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@material-ui/core";

export default function ProbabilitiesContainer(props) {
  const { theme, probabilities, probsLoading } = props;
  return (
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
              />
            )}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
