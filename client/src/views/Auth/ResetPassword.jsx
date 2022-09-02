import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  createStyles,
  Text,
  Center,
  Container,
  Group,
  Button,
  Loader,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { resetPassword } from "../../services/auth";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const { onResetPassword } = useAuth();
  const [confirmed, setConfirmed] = useState(false);
  const classes = useStyles();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = () => {
    const data = {
      token: token,
      password: form.values.password,
    };
    onResetPassword(data);
    navigate("/login");
  };

  return (
    <>
      <Container size={460} my={30}>
        <Paper withBorder shadow="md" mt={20} p={65} radius="md">
          <Title className={classes.title}>Choose your new password</Title>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <PasswordInput
              mt="xl"
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />

            <PasswordInput
              mt="sm"
              label="Confirm password"
              placeholder="Confirm password"
              {...form.getInputProps("confirmPassword")}
            />
            <Group position="right" mt="md">
              <Button classNames={classes.button} type="submit">
                Submit
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  );
}
