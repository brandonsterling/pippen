import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Register() {
  const navigate = useNavigate();
  const { onRegister, token } = useAuth();

  useEffect(() => {
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
      <Paper withBorder shadow="md" p={65} mt={20} radius="md">
        <Title
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Create your Pippen account
        </Title>
        <TextInput
          mt="xl"
          label="Email"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          required
          mt="xl"
          {...form.getInputProps("password")}
        />

        <Button
          sx={{ backgroundColor: "#3ecf8e" }}
          size="md"
          onClick={handleSubmit}
          fullWidth
          mt="xl"
        >
          Create account
        </Button>
        <Text color="dimmed" size="sm" mt={30}>
          Already have an account?{" "}
          <Anchor
            href="/auth/login"
            size="sm"
            onClick={() => navigate("/auth/login")}
          >
            Sign in
          </Anchor>
        </Text>
      </Paper>
    </>
  );
}
