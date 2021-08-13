import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Toolbar } from "@material-ui/core";

export default function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Digits by Daniel Johnson
        </Typography>

        <ButtonGroup color="secondary" variant="contained">
          <Button
            onClick={() => {
              window.open("https://github.com/DanielRJohnson");
            }}
          >
            My GitHub
          </Button>

          <Button
            onClick={() => {
              window.open("https://github.com/DanielRJohnson/nn-digits-app");
            }}
          >
            Project Repo
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
