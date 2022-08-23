import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Title,
  Box,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { CreateResumeCard } from "../components/CreateResumeCard";
import { NavHeader } from "../components/NavHeader";
import { ResumeCard } from "../components/ResumeCard";
import {
  getResumes,
  createResume,
  deleteResumeById,
} from "../services/resumes";
import { useAuth } from "../AuthProvider";
import { Footer } from "../components/Footer";
import { useForceUpdate } from "@mantine/hooks";

function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const { token } = useAuth();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    getResumes(token).then((response) => {
      setResumes(response.data);
    });
  }, []);

  const handleClick = () => {
    createResume(token);
    forceUpdate();
  };

  return (
    <>
      <NavHeader hideLogin="true" />
      <Box
        sx={{
          minHeight: "750px",
          paddingBottom: "100px",
          width: "100%",
          backgroundColor: "#f7f9fc",
        }}
      >
        <Container>
          <Group
            sx={{ paddingTop: "30px", marginBottom: "20px" }}
            position="apart"
          >
            <Title order={2}>Resumes</Title>
            <Button onClick={handleClick}>Add New</Button>
          </Group>
          <SimpleGrid spacing="lg" cols={3}>
            {resumes.length > 0 &&
              resumes.map((resume) => (
                <ResumeCard
                  resume={resume}
                  deleteResumeById={() => deleteResumeById(resume._id, token)}
                />
              ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Dashboard;
