import React from "react";

import Title from "./Title";
import List, { Item } from "./List";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { getDate, getPlace, getTitle, getLocation, styles } from "./utils";

const ExperienceEntry = ({
  company,
  start_date,
  end_date,
  highlights,
  role,
  location,
  present,
  summary,
}) => {
  const locationText = location && getPlace(location);
  const titleText = getTitle(company, locationText);
  const dateText = getDate(start_date, end_date, present);
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>{titleText}</View>
        <View style={styles.rightColumn}>{dateText}</View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.subtitle}>{role}</Text>
        </View>
        <View style={styles.rightColumn}>{locationText}</View>
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

const Experience = ({ experience }) => {
  return (
    <View style={styles.container}>
      <Title>Experiences</Title>
      {experience.map(
        (
          {
            company,
            start_date,
            end_date,
            highlights,
            role,
            location,
            present,
            summary,
          },
          index
        ) => (
          <ExperienceEntry
            company={company}
            start_date={start_date}
            end_date={end_date}
            highlights={highlights}
            key={index}
            role={role}
            location={location}
            present={present}
            summary={summary}
          />
        )
      )}
    </View>
  );
};

export default Experience;
