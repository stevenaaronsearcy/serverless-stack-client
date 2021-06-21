import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import "./Skills.css";
import LanguageCarousel from "../components/LanguageCarousel";



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
    paddingLeft: "40px",
    paddingRight: "40px"
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
});

function Skills(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography color="primary" align="center" variant="h3" id="hello">
              Abilities
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LanguageCarousel justifyContent="center" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
