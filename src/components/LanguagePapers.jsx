import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./LanguagePapers.css";
import HTML5 from "../assets/html5-original-wordmark.svg";
import CSS3 from "../assets/css3-original-wordmark.svg";
import Javascript from "../assets/javascript-plain.svg";
import TSCR from "../assets/typescript-original.svg";
import Angular from "../assets/angularjs-original.svg";
import RCT from "../assets/react-original.svg";
import NDJS from "../assets/nodejs-original.svg";
import BTSTRP from "../assets/bootstrap-plain.svg";
import AWSS from "../assets/amazonwebservices-original.svg";
import MYSQL from "../assets/mysql-original.svg";
import MUI from "../assets/materialui-original.svg";
import EXPRS from "../assets/express-original-wordmark.svg";


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
    paddingLeft:"10px",
    paddingRight:"10px"
  }
}));

export default function LanguagePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={HTML5} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={CSS3} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={Javascript} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={TSCR} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={Angular} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={RCT} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={NDJS} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={BTSTRP} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={AWSS} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={MYSQL} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={MUI} alt="..." />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="icon">
            <img src={EXPRS} alt="..." />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
