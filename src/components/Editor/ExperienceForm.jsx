import {
  Box,
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React from "react";
import Accordion from "./Accordion";
import HighlightsForm from "./HighlightsForm";

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

function ExperienceForm({ form }) {
  const fields = form.values.experience.map((item, index) => (
    <Accordion
      key={index}
      title={
        <>
          {form.getInputProps(`experience.${index}.company`).value}{" "}
          {form.getInputProps(`experience.${index}.role`).value}
        </>
      }
      remove={() => form.removeListItem("experience", index)}
      content={
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            label="Role"
            {...form.getInputProps(`experience.${index}.role`)}
          />
          <TextInput
            label="Company"
            {...form.getInputProps(`experience.${index}.company`)}
          />
          <TextInput
            label="City"
            {...form.getInputProps(`experience.${index}.location.city`)}
          />
          <TextInput
            label="State"
            {...form.getInputProps(`experience.${index}.location.state`)}
          />
          <DatePicker
            {...form.getInputProps(`experience.${index}.start_date`)}
            allowLevelChange={"month"}
            label="Start date"
            value={
              new Date(
                form.getInputProps(`experience.${index}.start_date`).value
              )
            }
          />
          <DatePicker
            {...form.getInputProps(`experience.${index}.end_date`)}
            allowLevelChange={"month"}
            label="End date"
            value={
              new Date(form.getInputProps(`experience.${index}.end_date`).value)
            }
          />
        </SimpleGrid>
      }
    >
      <HighlightsForm form={form} index={index} highlights={item.highlights} />
      <Button
        onClick={() =>
          form.insertListItem(`experience.${index}.highlights`, "")
        }
        sx={{ alignItems: "left" }}
        fullWidth
        variant="subtle"
      >
        + Add a highlight
      </Button>
    </Accordion>
  ));

  return (
    <Box withBorder radius="md">
      <Text size="xl" weight={700}>
        Experience
      </Text>
      {fields}
      <Group position="center" mt="md">
        <Button
          size="md"
          fullWidth
          variant="subtle"
          onClick={() =>
            form.insertListItem("experience", {
              highlights: [],
              role: "",
              company: "",
              location: {
                city: "",
                region: "",
              },
              start_date: "",
              end_date: "",
              present: null,
              summary: "",
            })
          }
        >
          + Add an experience
        </Button>
      </Group>{" "}
    </Box>
  );
}

export default ExperienceForm;
