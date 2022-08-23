import {
  ActionIcon,
  Box,
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
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

const Highlights = ({ form, index, highlights }) => {
  const lights = highlights.map((item, i) => (
    <div key={i}>
      <Group position="apart" noWrap spacing="s">
        <Textarea
          sx={{ margin: "20px 0 20px", width: "90%" }}
          {...form.getInputProps(`projects.${index}.highlights.${i}`)}
        />
        <Stack align="center">
          <ActionIcon
            onClick={() =>
              form.removeListItem(`projects.${index}.highlights`, i)
            }
          >
            <FaTrashAlt />
          </ActionIcon>
        </Stack>
      </Group>
    </div>
  ));
  return <>{lights}</>;
};

function ProjectsForm({ form }) {
  const fields = form.values.projects.map((item, index) => (
    <Accordion
      title={form.getInputProps(`projects.${index}.name`).value}
      remove={() => form.removeListItem("projects", index)}
      content={
        <>
          <TextInput
            label="Name"
            {...form.getInputProps(`projects.${index}.name`)}
          />
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            <DatePicker
              {...form.getInputProps(`projects.${index}.start_date`)}
              allowLevelChange={"month"}
              label="Start date"
              value={
                new Date(
                  form.getInputProps(`projects.${index}.start_date`).value
                )
              }
            />
            <DatePicker
              {...form.getInputProps(`projects.${index}.end_date`)}
              allowLevelChange={"month"}
              label="End date"
              value={
                new Date(form.getInputProps(`projects.${index}.end_date`).value)
              }
            />
          </SimpleGrid>
        </>
      }
    >
      <Highlights form={form} index={index} highlights={item.highlights} />
      <Button
        onClick={() => form.insertListItem(`projects.${index}.highlights`, " ")}
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
        Projects
      </Text>
      {fields}
      <Group position="center" mt="md">
        <Button
          size="md"
          fullWidth
          variant="subtle"
          onClick={() =>
            form.insertListItem("projects", {
              highlights: [],
              start_date: "",
              end_date: "",
              name: "",
              description: "",
            })
          }
        >
          + Add a project
        </Button>
      </Group>{" "}
    </Box>
  );
}

export default ProjectsForm;
