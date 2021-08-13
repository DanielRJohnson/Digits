import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./Navbar";
import AppBody from "./AppBody";

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
        <AppBody theme={theme} />
      </div>
    </ThemeProvider>
  );
}
