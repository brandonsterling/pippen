import React from "react";

import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import Education from "../Templates/Original/Education";
import Experience from "../Templates/Original/Experience";
import Header from "../Templates/Original/Header";
import Projects from "../Templates/Original/Projects";
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 60,
    paddingVertical: 50,
    fontFamily: "Helvetica",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    right: 60,
    alignItems: "center",
  },
  watermarkText: {
    color: "#afafaf",
    fontSize: 7,
    height: 10,
    flexWrap: "none",
  },
  watermarkLink: {
    textDecoration: "none",
  },
});

const Resume = (props) => {
  const { education, experience, projects } = props;
  const basics = props;
  return (
    <Document>
      <Page style={styles.page} size="LETTER">
        <Header basics={basics} />
        <Education education={education} />
        <Experience experience={experience} />
        <Projects projects={projects} />
      </Page>
    </Document>
  );
};

const Output = (props) => <Resume {...props} />;

export default Output;
