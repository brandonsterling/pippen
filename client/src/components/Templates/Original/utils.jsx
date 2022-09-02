import { Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";
export const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 6,
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
  degree: {
    fontSize: 10,
    fontStyle: "italic",
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
  rightColumn: {},
  title: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
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

export function getDate(start_date, end_date, present) {
  if (start_date && present) {
    return (
      <Text style={styles.date}>
        {dayjs(start_date).format("MM/YYYY") + " - " + "Present"}
      </Text>
    );
  } else if (start_date && end_date) {
    return (
      <Text style={styles.date}>
        {dayjs(start_date).format("MM/YYYY") +
          " - " +
          dayjs(end_date).format("MM/YYYY")}
      </Text>
    );
  }
  return null;
}

export function getTitle(company, locationText) {
  if (locationText && company) {
    return (
      <Text>
        <Text style={styles.title}>{company}</Text>
        {/* <Text style={styles.subtitle}>{`, ${locationText}`}</Text> */}
      </Text>
    );
  } else if (company) {
    return <Text style={styles.title}>{company}</Text>;
  } else if (locationText) {
    return <Text style={styles.subtitle}>{locationText}</Text>;
  }
  return null;
}

export function getLocation(location) {
  if (location.city && location.state) {
    return `${location.city}, ${location.state}`;
  } else if (location.city) {
    return location.city;
  } else if (location.state) {
    return location.state;
  }
  return null;
}

export function getPlace(location) {
  if (location.city && location.state) {
    return (
      <Text style={styles.subtitle}>
        {location.city}, {location.state}
      </Text>
    );
  } else if (location.city) {
    return <Text style={styles.subtitle}>{location.city}</Text>;
  } else if (location.state) {
    return <Text style={styles.subtitle}>{location.state}</Text>;
  }
  return null;
}

export function getDegree(degree, major) {
  if (degree && major) {
    return `${degree} in ${major}`;
  } else {
    return <Text style={styles.degree}>{degree}</Text>;
  }
}

export function getGpa(gpa) {
  if (gpa) {
    return `GPA: ${gpa}`;
  }
  return "";
}

export function getDetailedInfo(degree, gpa) {
  const infoArray = [];
  if (degree) infoArray.push(degree);
  if (gpa) infoArray.push(gpa);
  return infoArray.join(", ");
}
