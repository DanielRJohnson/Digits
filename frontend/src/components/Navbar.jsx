import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";

export default function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Digits App
        </Typography>

        <Button
          variant="contained"
          color="default"
          onClick={() => {
            window.open("https://github.com/DanielRJohnson");
          }}
        >
          My GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}
