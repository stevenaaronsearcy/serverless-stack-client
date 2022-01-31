import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Container from "@material-ui/core/Container";




function App() {
  return (
    <div>
      <Container disableGutters maxWidth={false}>
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
