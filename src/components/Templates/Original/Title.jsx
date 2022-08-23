import React from "react";

import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottom: "1 solid black",
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
