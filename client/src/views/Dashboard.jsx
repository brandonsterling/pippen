import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Title,
  Box,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { NavHeader } from "../components/NavHeader";
import { ResumeCard } from "../components/ResumeCard";
import {
  getResumes,
  createResume,
  deleteResumeById,
} from "../services/resumes";
import { useAuth } from "../AuthProvider";
import { Footer } from "../components/Footer";

function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    getResumes(token).then((response) => {
      setResumes(response.data);
    });
  }, []);

  const handleCreate = () => {
    createResume(token).then((response) => {
      setResumes(response.data);
    });
  };

  const handleDelete = (id) => {
    deleteResumeById(id, token).then((response) => {
      setResumes(response.data);
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f7f9fc",
        }}
      >
        <NavHeader hideLogin={true} />
        <Container
          size="md"
          sx={{ minHeight: "850px", backgroundColor: "#f7f9fc" }}
        >
          <Group
            sx={{ paddingTop: "30px", marginBottom: "20px" }}
            position="apart"
          >
            <Title order={2}>Resumes</Title>
            <Button onClick={handleCreate}>Add New</Button>
          </Group>
          <SimpleGrid spacing="lg" cols={3}>
            {resumes.length > 0 &&
              resumes.map((resume) => (
                <ResumeCard
                  key={resume._id}
                  resume={resume}
                  deleteResumeById={() => handleDelete(resume._id)}
                />
              ))}
          </SimpleGrid>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Dashboard;
