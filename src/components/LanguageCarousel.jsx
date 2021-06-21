import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import "./Languages.css";
import LanguagePaper from "./LanguagePapers";
import FrameworkPaper from "./FrameworkPapers";


const LanguageCarousel = (props) => {
  var items = [
    {
      name: "Languages & Frameworks",
      description: "Working with:",
      paper: <LanguagePaper/>
    },
    {
      name: "Technologies",
      description: "Working with:",
      paper: <FrameworkPaper/>
    },
  ];

  return (
    <Carousel autoPlay={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      style={{
        borderColor: "#edc139",
        border: "solid",
        backgroundColor: "rgb(1,1,1)",
        color: "white",
      }}
      align="center"
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <p>{props.item.paper}</p>
    </Paper>
  );
}

export default LanguageCarousel;
