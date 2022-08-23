import React from "react";
import { ActionIcon, Text, Group, Textarea, Stack, Box } from "@mantine/core";
import { FaTrashAlt } from "react-icons/fa";

function HighlightsForm({ form, index, highlights }) {
  const lights = highlights.map((item, i) => (
    <div key={i}>
      <Group position="apart" noWrap spacing="s">
        <Textarea
          sx={{ margin: "20px 0 20px", width: "90%" }}
          {...form.getInputProps(`experience.${index}.highlights.${i}`)}
        />
        <Stack align="center">
          <ActionIcon
            onClick={() =>
              form.removeListItem(`experience.${index}.highlights`, i)
            }
          >
            <FaTrashAlt />
          </ActionIcon>
        </Stack>
      </Group>
    </div>
  ));
  return (
    <Box mt={25}>
      <Text sx={{ margin: "0px 0 0px" }} size="lg" weight={700}>
        Highlights
      </Text>
      {lights}
    </Box>
  );
}

export default HighlightsForm;
