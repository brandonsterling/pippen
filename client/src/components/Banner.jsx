import React from "react";
import { createStyles } from "@mantine/core";

const options = {
  blue: {
    colors: ["#53f", "#4553ff", "#4f40ff", "#25ddf5", "#1fa2ff"],
    background: "linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)",
  },
};

const useStyles = createStyles((theme) => ({
  stripes: {
    width: "100%",
    height: "10vw",
    position: "absolute",
    marginTop: "55px",
    marginBottom: "50px",
    background: options.blue.background,
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    transform: "skewY(-6deg)",
    transformOrigin: 0,
    "span:nth-child(1)": {
      gridColumn: "span 1",
      background: options.blue.colors[1],
    },
    "span:nth-child(2)": {
      gridColumn: "span 2",
      background: options.blue.colors[2],
    },

    "span:nth-child(3)": {
      gridColumn: "span 3",
      background: options.blue.colors[3],
    },

    "span:nth-child(4)": {
      gridColumn: 6,
      gridRow: 3,
      background: options.blue.colors[4],
    },

    "span:nth-child(5)": {
      gridColumn: "span 2",
      gridRow: 4,
      background: options.blue.colors[5],
    },
  },
}));

function Banner() {
  const { classes } = useStyles();
  return (
    <div className={classes.stripes}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Banner;
