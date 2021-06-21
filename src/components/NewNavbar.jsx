import React, { useState, useEffect } from "react";
import Routes from "../Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "../libs/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Home } from "@material-ui/icons";
import "./NewNavbar.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import {materialTheme} from "../../src/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 2
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }
  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className={classes.root}>
        <MaterialThemeProvider theme={materialTheme}>
          <AppBar position="static" style={{ background: "rgb(1,1,1)" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              {/* <MenuIcon /> */}
              <LinkContainer to="/">
                <IconButton edge="start" color="inherit" aria-label="home">
                  <Home fontSize="large" />
                </IconButton>
              </LinkContainer>
              <Nav activeKey={window.location.pathname}>
                {isAuthenticated ? (
                  <>
                    <Button color="inherit" href="/settings" id="button">
                      settings
                    </Button>
                    <Button color="inherit" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit" href="/login">
                      Login
                    </Button>
                    <Button color="inherit" href="/signup">
                      Signup
                    </Button>
                  </>
                )}
              </Nav>
            </Toolbar>
          </AppBar>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <Routes />
          </AppContext.Provider>
        </MaterialThemeProvider>
      </div>
    )
  );
}

