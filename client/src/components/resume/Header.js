import React from "react";

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: "15",
  },
  contactContainer: {
    flexDirection: "row",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 1,
  },
  contactColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  linkColumn: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  name: {
    fontSize: 22,
    letterSpacing: 0.1,
  },
  subtitle: {
    fontSize: 11,
    letterSpacing: 0.6,
    justifySelf: "flex-end",
    textTransform: "uppercase",
  },
  summary: {
    fontSize: 9,
    justifySelf: "flex-end",
    letterSpacing: 0.3,
    lineHeight: 1.5,
    marginTop: 9,
  },
  link: {
    fontSize: 9,
    color: "black",
    textDecoration: "none",
    fontFamily: "Open Sans Light",
    alignSelf: "flex-end",
  },
  emailPhoneGroup: {
    fontSize: 9,
    color: "black",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subtitleSeparator: {
    marginRight: 4,
    marginLeft: 4,
  },
});

export default ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        <View style={styles.detailColumn}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </View>
  );
};
