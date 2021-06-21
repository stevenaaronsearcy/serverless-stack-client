import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./FrameworkPapers.css";
import VSC from "../assets/visualstudio-plain-wordmark.svg";
import BIT from "../assets/bitbucket-original-wordmark.svg";
import GITHUB from "../assets/github-original-wordmark.svg"
import GIT from "../assets/git-original-wordmark.svg";
import IJ from "../assets/intellij-original-wordmark.svg";
import NPM from "../assets/npm-original-wordmark.svg";
import SLACK from "../assets/slack-original-wordmark.svg";
import ILL from "../assets/illustrator-line.svg";
import PS from "../assets/photoshop-line.svg";
import Sequelize from "../assets/sequelize-original-wordmark.svg";
import Trello from "../assets/trello-plain-wordmark.svg";
import WP from "../assets/wordpress-original.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 100,
  },
  container: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

export default function FrameworkPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={VSC} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={BIT} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={GITHUB} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={GIT} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={IJ} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={SLACK} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={NPM} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={Sequelize} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={ILL} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={PS} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={Trello} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={WP} alt="..." />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
