import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import ASP from "../assets/Mockup.png";
import BB from "../assets/Mockup2.png";
import NTS from "../assets/Mockup3.png";
import SITE from "../assets/Mockup4.png";
import CALC from "../assets/Mockup5.png";
import "./Projects.css";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "rgb(1,1,1)",
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(15),
    display: "flex",
    position: "relative",
    paddingLeft: "0px",
    paddingRight: "0px",
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
  control: {
    padding: theme.spacing(2)
  }
});

function Projects(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2} wrap="wrap">
          <Grid item xs={12}>
            <Typography color="primary" align="center" variant="h3" id="hello">
              Projects
            </Typography>
          </Grid>
          <Grid item xs={6} align="center" wrap="wrap">
            <img src={BB} alt="..." id="mock" class="grow" />
          </Grid>
          <Grid item xs={6} align="center" wrap="wrap">
            <img src={NTS} alt="..." id="mock" class="grow" />
          </Grid>
          <Grid item xs={12} align="center" wrap="wrap">
            <img src={ASP} alt="..." id="mock" class="grow" />
          </Grid>
          <Grid item xs={6} align="center" wrap="wrap">
            <img src={SITE} alt="..." id="mock" class="grow" />
          </Grid>
          <Grid item xs={6} align="center" wrap="wrap">
            <img src={CALC} alt="..." id="mock" class="grow" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
