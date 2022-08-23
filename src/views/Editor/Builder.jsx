import {
  SimpleGrid,
  Skeleton,
  Button,
  Box,
  Container,
  Center,
  Loader,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Output from "../../components/resume/Clean";
import Form from "../../components/Editor/Form";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { useParams } from "react-router-dom";
import { getResumeById, updateResume } from "../../services/resumes";
import Viewer from "./Viewer";
import { useAuth } from "../../AuthProvider";

function Builder() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const form = useForm({
    initialValues: {
      owner: " ",
      __v: 0,
      _id: " ",
      basics: {
        first_name: " ",
        last_name: " ",
        email: " ",
        title: " ",
        url: " ",
        phone: " ",
        linkedin_url: " ",
        portfolio_url: " ",
      },
      education: [
        {
          institution: " ",
          location: {
            city: " ",
            state: " ",
          },
          start_date: new Date(),
          end_date: new Date(),
          _id: " ",
        },
      ],
      experience: [
        {
          highlights: [" "],
          role: " ",
          company: " ",
          location: {
            city: " ",
            state: " ",
          },
          start_date: new Date(),
          end_date: new Date(),
          present: true,
          summary: " ",
          _id: " ",
        },
      ],
      projects: [
        {
          highlights: [" "],
          description: " ",
          start_date: new Date(),
          end_date: new Date(),
          name: "",
          _id: " ",
        },
      ],
    },
  });

  useEffect(() => {
    getResumeById(id, token).then((result) => {
      form.setValues(result.data);
      setLoading(false);
    });
  }, []);

  return (
    <SimpleGrid spacing="0" sx={{ height: "100vh" }} cols={2}>
      <Form form={form} />
      <Box sx={{ backgroundColor: "gray" }}>
        {loading ? (
          <Loader sz="lg" color="indigo" />
        ) : (
          <Viewer form={form} id={id} />
        )}
      </Box>
    </SimpleGrid>
  );
}

export default Builder;
