import React, { useState } from "react";
import {
  Box,
  Text,
  createStyles,
  TextInput,
  Button,
  SimpleGrid,
  Group,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Accordion from "./Accordion";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    marginTop: "15px",
    marginBottom: "20px",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(0, "#408AF8", "#6772E5"),
    },
  },
}));

function EducationForm({ form }) {
  const { classes } = useStyles();

  const fields = form.values.education.map((item, index) => (
    <Accordion
      key={index}
      title={form.getInputProps(`education.${index}.institution`).value}
      remove={() => form.removeListItem("education", index)}
      content={
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            label="School name"
            {...form.getInputProps(`education.${index}.institution`)}
          />
          <TextInput
            label="Degree"
            {...form.getInputProps(`education.${index}.degree`)}
          />
          <TextInput
            label="City"
            {...form.getInputProps(`education.${index}.location.city`)}
          />
          <TextInput
            label="State"
            {...form.getInputProps(`education.${index}.location.state`)}
          />
          <DatePicker
            {...form.getInputProps(`education.${index}.start_date`)}
            allowLevelChange={"month"}
            label="Start date"
            value={
              new Date(
                form.getInputProps(`education.${index}.start_date`).value
              )
            }
          />
          <DatePicker
            {...form.getInputProps(`education.${index}.end_date`)}
            allowLevelChange={"month"}
            label="End date"
            value={
              new Date(form.getInputProps(`education.${index}.end_date`).value)
            }
          />
        </SimpleGrid>
      }
    />
  ));
  return (
    <Box withBorder radius="md">
      <Text size="xl" weight={700}>
        Education
      </Text>
      {fields}
      <Group position="center" mt="md">
        <Button
          size="md"
          fullWidth
          variant="subtle"
          onClick={() =>
            form.insertListItem("education", {
              institution: " ",
              location: {
                city: " ",
                state: " ",
              },
              start_date: new Date(),
              end_date: new Date(),
            })
          }
        >
          + Add education
        </Button>
      </Group>{" "}
    </Box>
  );
}

export default EducationForm;
