import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TitleLayout from "./TitleLayout";
import "./Title.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const backgroundImage =
  "https://images.unsplash.com/photo-1614062387997-8dd3b011bdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "transparent",
      color: "white"
    },
    borderStyle: "solid",
    borderRadius: "50px",
    borderWidth: "3px",
    borderColor: theme.pipelineProvider,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Title(props) {
  const { classes } = props;

  return (
    <TitleLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography variant="h1" align="center" id="fullstacktitle">
        Full-stack Web Developer
      </Typography>
      <Typography
        color="inherit"
        align="center"
        className={classes.h5}
        id="fullstack"
      >
        I'm a full-stack web developer in Nashville, TN.
      </Typography>
      <Grid item xs={12} container justify="center">
        <Button justifyContent="center" variant="outlined" id="titlebutton" href="/login">
          Latest Project
        </Button>
      </Grid>
    </TitleLayout>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Title);
