import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import "./TitleValue.css";
import Pdf from "../pdf/MyFinalResume.pdf";
import Button from "@material-ui/core/Button";
import BTCard from "./BTCard";
import UTCard from "./UTCard";
import logo from "../assets/graduated.svg";
import {useMediaQuery} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "rgb(1,1,1)",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
  palette: {
    text: {
      primary: "white",
      secondary: "blue",
    },
  },
  aboutMe: {
    fontFamily: 'Source Sans Pro',
    color: 'white'
  }
});

function TitleValues(props) {
  const { classes } = props;
  const mobile = useMediaQuery('(max-width: 600px)');

  return (
    <section className={classes.root}>
      <Container className={classes.container} wrap="wrap">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography color="primary" align="center" variant="h3" id="hello">
              Hello, I'm Steven, let's talk.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="primary"
              align="center"
              style={
                !mobile
                  ? { paddingLeft: "100px", paddingRight: "100px" }
                  : undefined
              }
              className={classes.aboutMe}
            >
              Upon hearing about opportunities in software development, I was
              working as a professional in the Hospitality industry. I found
              myself yearning for a new career path where I could express my
              passion in full stack web development. As a young boy, I would
              putter around with web functionality while having a particular
              interest in how code was executed. After much consideration, I
              decided to enroll at Bethel School of Technology where I am
              currently furthering my full stack development skills.
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Button
              justifyContent="center"
              variant="outlined"
              color="primary"
              id="pdfbutton"
              href={Pdf}
              src="/src/pdf/StevenAaronSearcy.pdf"
              target="_blank"
            >
              Print Resume
            </Button>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "100px" }}>
            <Typography color="primary" align="center" variant="h3" id="hello">
              Education
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center" wrap="wrap">
            <BTCard wrap="wrap" />
          </Grid>
          <Grid item xs={12} container justify="center" wrap="wrap">
            <img src={logo} alt="..." id="gradlogo" wrap="wrap" />
          </Grid>
          <Grid item xs={12} container justify="center" wrap="wrap">
            <UTCard wrap="wrap" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

TitleValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleValues);
