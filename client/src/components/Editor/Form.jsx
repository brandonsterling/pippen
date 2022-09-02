import React from "react";

import { Paper, Stack } from "@mantine/core";
import BasicInfo from "./BasicInfo";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";

export default function Form({ form }) {
  return (
    <Paper
      sx={{
        overflowY: "auto",
        height: "100%",
        width: "100%",
        padding: "20px 60px 50px 60px",
      }}
    >
      <form>
        <Stack spacing="xl">
          <BasicInfo form={form} />
          <EducationForm form={form} />
          <ExperienceForm form={form} />
          <ProjectsForm form={form} />
        </Stack>
      </form>
    </Paper>
  );
}
