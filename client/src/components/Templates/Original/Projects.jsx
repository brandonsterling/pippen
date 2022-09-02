import React from "react";

import Title from "./Title";
import List, { Item } from "./List";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { getDate, getTitle, getLocation, styles } from "./utils";

const ProjectEntry = ({
  start_date,
  end_date,
  highlights,
  name,
  description,
}) => {
  //const locationText = location && getLocation(location);
  const titleText = getTitle(name);
  const dateText = getDate(start_date, end_date);
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>{titleText}</View>
        <View style={styles.rightColumn}>{dateText}</View>
      </View>
      {/* {!!summary && <Text style={styles.details}>{summary}</Text>} */}
      <List>
        {highlights &&
          highlights.map((detail, i) => (
            <Item key={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
      </List>
    </View>
  );
};

const Projects = ({ projects }) => {
  return (
    <View style={styles.container}>
      <Title>Projects</Title>
      {projects.map(
        ({ start_date, end_date, highlights, name, description }, index) => (
          <ProjectEntry
            description={description}
            start_date={start_date}
            end_date={end_date}
            highlights={highlights}
            key={index}
            name={name}
          />
        )
      )}
    </View>
  );
};

export default Projects;
