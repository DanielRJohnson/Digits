import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Canvas from "./Canvas";
import { Box, Card, CardContent, Grid, ThemeProvider } from "@material-ui/core";

//maybe add custom theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#C5CAE9",
    },
  },
});

export default function DigitsPage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <Navbar classes={classes} />
        <Box
          height="90vh"
          color="text.primary"
          //bgcolor={theme.palette.secondary.main}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
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
                  <Canvas />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
