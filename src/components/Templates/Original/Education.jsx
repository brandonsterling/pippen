import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./Title";

import {
  getDate,
  getDegree,
  getDetailedInfo,
  getGpa,
  getTitle,
  getLocation,
  getPlace,
} from "./utils";

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 6,
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
  detailContainer: {
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 0.5,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: { textAlign: "right" },
  title: {
    fontSize: 10,
  },
  subtitle: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    letterSpacing: 0.1,
    marginBottom: 0.5,
  },
});

export default function Education({ education }) {
  return (
    <View style={styles.container}>
      <Title>Education</Title>
      {education.map((education, i) => {
        const locationText = education.location && getPlace(education.location);
        console.log(locationText);
        const dateText = getDate(
          education.start_date,
          education.end_date,
          education.present
        );
        const gpaText = getGpa(education.gpa);
        const title = getTitle(education.institution);
        const degree = getDegree(education.degree);
        return (
          <View key={i} style={styles.entryContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.leftColumn}>{title}</View>
              <View style={styles.rightColumn}>{locationText}</View>
            </View>
            <View style={styles.headerContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.details}>{degree}</Text>
              </View>
              <View style={styles.rightColumn}>{dateText}</View>
            </View>
            <Text style={styles.details}>{education.summary}</Text>
          </View>
        );
      })}
    </View>
  );
}
