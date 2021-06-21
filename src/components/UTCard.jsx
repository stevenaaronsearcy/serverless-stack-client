import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./UTCard.css";
import UT from "../assets/UT.png";


const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    color: "white",
  },
});

export default function UTCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" id="card2">
      <CardContent>
        <Typography align="center" id="school">
          The University of Tennessee <img src={UT} alt="..." id="utlogo" />
        </Typography>
        <Typography align="center" id="degree">
          <br />
          Bachelors of Science in Hospitality
        </Typography>
        <Typography align="center" id="minor">
          Minor in Business Administration
        </Typography>
      </CardContent>
    </Card>
  );
}
