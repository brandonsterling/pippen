import React from "react";

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: "15",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    alignItems: "center",
  },
  linkColumn: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  name: {
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: 0.3,
    marginBottom: 0.5,
  },
  subtitle: {
    fontSize: 10,
    letterSpacing: 0.3,
    justifySelf: "flex-end",
    textTransform: "uppercase",
    marginBottom: 3,
  },
  summary: {
    fontSize: 10.5,
    justifySelf: "flex-end",
    marginTop: 10,
  },
  linkGroup: {
    letterSpacing: 0.3,
    fontSize: 10.5,
    color: "black",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  link: {
    letterSpacing: 0.3,
    fontSize: 10,
    color: "black",
    textDecoration: "none",
  },
  subtitleSeparator: {
    marginRight: 2,
    marginLeft: 2,
  },
});

function getName(basics) {
  if (basics.first_name && basics.last_name) {
    return `${basics.first_name} ${basics.last_name}`;
  }
  return undefined;
}

function getContactInfo(basics) {
  let subtitles = [];
  if (basics.email) {
    subtitles.push(
      <Link style={styles.link} src={"mailto:" + basics.email}>
        {basics.email}
      </Link>
    );
  }
  if (basics.phone) {
    subtitles.push(
      <Link style={styles.link} src={"tel:" + basics.phone}>
        {basics.phone}
      </Link>
    );
  }
  if (basics.linkedin_url) {
    subtitles.push(
      <Link style={styles.link} src={basics.linkedin_url}>
        {basics.linkedin_url}
      </Link>
    );
  }
  if (basics.portfolio_url) {
    subtitles.push(
      <Link style={styles.link} src={basics.portfolio_url}>
        {basics.portfolio_url}
      </Link>
    );
  }
  subtitles = subtitles.flatMap((value, index, array) =>
    array.length - 1 !== index // check for the last item
      ? [value, <Text style={styles.subtitleSeparator}>•</Text>]
      : value
  );
  return <View style={styles.linkGroup}>{subtitles}</View>;
}

function getSummary(summary) {
  if (summary) {
    return <Text style={styles.summary}>{summary}</Text>;
  }
  return null;
}

export default function Header({ basics, color }) {
  var name = getName(basics);
  var title = basics.title;
  var email = basics.email;
  var phone = basics.phone;
  var summary = basics.summary;
  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>{name}</Text>
        {getContactInfo(basics)}
        {getSummary(summary)}
      </View>
    </View>
  );
}
