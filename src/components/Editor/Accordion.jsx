import React, { useState } from "react";
import {
  Box,
  Text,
  createStyles,
  keyframes,
  Collapse,
  Paper,
  Group,
  ActionIcon,
} from "@mantine/core";
import { FaChevronDown, FaChevronUp, FaTrashAlt } from "react-icons/fa";
import { useHover } from "@mantine/hooks";

export const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -30px, 0)" },
  "70%": { transform: "translate3d(0, -15px, 0)" },
  "90%": { transform: "translate3d(0, -4px, 0)" },
});

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

  button: {
    transform: "rotate(180deg)",
  },
}));

const AccordionHeader = ({
  title,
  remove,
  opened,
  setOpened,
  hovered,
  classes,
}) => {
  return (
    <>
      <Box height="100%">
        <Group onClick={() => setOpened(!opened)} position="apart">
          <Text size="lg" weight={700}>
            {title}
          </Text>
          <Group>
            {remove && hovered && (
              <ActionIcon onClick={remove}>
                <FaTrashAlt />
              </ActionIcon>
            )}
            <ActionIcon
              className={opened ? classes.button : null}
              onClick={() => setOpened(!opened)}
            >
              <FaChevronDown />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </>
  );
};

const AccordionContent = ({ children, opened, content }) => {
  return (
    <Collapse mt={15} in={opened}>
      {content}
      {children}
    </Collapse>
  );
};
function Accordion({ children, title, remove, content }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const { hovered, ref } = useHover();

  return (
    <Paper ref={ref} withBorder radius="md" className={classes.card}>
      <AccordionHeader
        hovered={hovered}
        classes={classes}
        title={title}
        remove={remove}
        opened={opened}
        setOpened={setOpened}
      />
      <AccordionContent opened={opened} content={content} children={children} />
    </Paper>
  );
}

export default Accordion;
