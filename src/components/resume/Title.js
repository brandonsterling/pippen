import React from "react";

import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontSize: 7,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
