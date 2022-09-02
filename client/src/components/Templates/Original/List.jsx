import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  bulletPoint: {
    fontSize: 10,
    marginLeft: 6,
    marginRight: 3,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    letterSpacing: 0.1,
    marginBottom: 3,
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.bulletPoint}>• </Text>
    </View>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
