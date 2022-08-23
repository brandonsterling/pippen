import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Alert,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Register() {
  const navigate = useNavigate();
  const { onRegister, registered, token } = useAuth();

  useEffect(() => {
    console.log(token);
    if (token) {
      navigate("/dashboard");
    }
  }, []);

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
    onRegister(user);
  };
  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create your account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor
          href="/auth/login"
          size="sm"
          onClick={() => navigate("/auth/login")}
        >
          Sign in
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={60} mt={20} radius="md">
        <TextInput label="Email" required {...form.getInputProps("email")} />
        <PasswordInput
          label="Password"
          required
          mt="md"
          {...form.getInputProps("password")}
        />

        <Button onClick={handleSubmit} fullWidth mt="xl">
          Create Account
        </Button>
      </Paper>
      {registered && (
        <Alert mt={30} title="We did it!" color="green">
          You're one step closer to creating your resume. We've sent you a
          confirmation email.
        </Alert>
      )}
    </>
  );
}
