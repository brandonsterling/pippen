import {
  ActionIcon,
  Card,
  Center,
  createStyles,
  Title,
  Button,
  Group,
  Modal,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { usePDF } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Output from "./resume/Clean";

const useStyles = createStyles((theme) => ({
  card: {
    width: "250px",
    height: "380px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

export function ResumeCard({ resume, deleteResumeById }) {
  const [loading, setLoading] = useState(true);
  const { classes, theme } = useStyles();
  let navigate = useNavigate();
  const template = Output(resume);
  const [opened, setOpened] = useState(false);

  const [instance, updateInstance] = usePDF({ document: template });

  const handleLoadedDoc = () => {
    setLoading(false);
  };

  const handleResumeDelete = () => {
    deleteResumeById();
    setOpened(false);
  };

  return (
    <>
      <Modal
        title="Are you sure you'd like to delete this resume?"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Button onClick={() => handleResumeDelete()} color="red">
          Delete
        </Button>
      </Modal>
      <Card withBorder p="lg" radius="md" className={classes.card}>
        <Card.Section
          sx={{
            paddingTop: "10px",
            backgroundColor: "gray",
            height: "270px",
            // width: "100%",
          }}
          mb="sm"
        >
          <Center sx={{ overflow: "hidden" }}>
            <Document
              noData=""
              loading=""
              onLoadSuccess={handleLoadedDoc}
              file={instance.url}
            >
              <Page height={243} width={190} pageNumber={1} wrap />
            </Document>
          </Center>
        </Card.Section>
        <Text weight={700} className={classes.title} mt="xs">
          {resume.name}
        </Text>
        <Card.Section className={classes.footer}>
          <Group position="right" spacing={0}>
            <ActionIcon onClick={() => navigate(`/resume/${resume._id}`)}>
              <FaRegEdit size={18} color={theme.colors.gray[7]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon download="Resume.pdf" component="a" href={instance.url}>
              <HiDownload size={18} color={theme.colors.gray[7]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon onClick={() => setOpened(true)}>
              <BsTrash size={18} color={theme.colors.gray[7]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}
