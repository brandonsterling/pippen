import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  createStyles,
  Title,
  Text,
  keyframes,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const shake = keyframes({
  "0%": { transform: "rotate(0deg);" },
  "25%": { transform: "rotate(5deg);" },
  "50%": { transform: "rotate(0deg);" },
  "75%": { transform: "rotate(-5deg);" },
  "100%": { transform: "rotate(0deg);" },
});

const useStyles = createStyles((theme) => ({
  paper: {
    // animationDelay: "10s",
    animation: `${shake} .5s 2`,
  },
}));

export function Login({ error }) {
  const [shake, setShake] = useState(false);
  const { classes } = useStyles();

  const navigate = useNavigate();
  const { onLogin, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    const user = {
      email: form.values.email,
      password: form.values.password,
    };
    onLogin(user);
  };

  useEffect(() => {
    if (error) {
      console.log("error found");
      setShake(true);
      setTimeout(() => {
        setShake(false);
        console.log("all done shaking");
      }, 2000);
    }
  }, [error]);

  if (token) {
    return <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>;
  }

  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Sign into your account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't have an account yet?{" "}
        <Anchor
          href="/auth/register"
          size="sm"
          onClick={() => navigate("/auth/register")}
        >
          Create an account
        </Anchor>
      </Text>
      <Paper
        className={shake ? classes.paper : null}
        withBorder
        shadow="md"
        p={60}
        mt={20}
        radius="md"
      >
        <TextInput label="Email" required {...form.getInputProps("email")} />
        <PasswordInput
          label="Password"
          required
          mt="md"
          {...form.getInputProps("password")}
        />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={() => handleSubmit()} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </>
  );
}
