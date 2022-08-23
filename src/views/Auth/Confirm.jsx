import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Loader,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmUser } from "../../services/auth";
import { createResume } from "../../services/resumes";

export function Confirm() {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    confirmUser(id).then((result) => {
      if (result.data.msg == "confirmed") {
        createResume(token);
        setConfirmed(true);
        navigate("/auth/login");
      }
    });
  }, []);

  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Confirming Email
      </Title>
      {!confirmed && <Loader />}
    </>
  );
}
