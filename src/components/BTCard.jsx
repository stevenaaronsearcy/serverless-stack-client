import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import "./BTCard.css";
import Bt from "../assets/Bt.png";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
      color: "white"
  }
});

export default function BTCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" id="card1">
      <CardContent>

        <Typography align="center" id="school">
          Bethel School of Technology <img src={Bt} alt="..." id="btlogo" />
        </Typography>
        <Typography align="center" id="degree">
          <br />
          Full-stack Web Development
        </Typography>
        <Typography align="center" id="minor">
          Nine Month Intensive Bootcamp
        </Typography>
      </CardContent>
    </Card>
  );
}
