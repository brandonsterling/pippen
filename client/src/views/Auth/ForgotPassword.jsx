import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { forgotPassword } from "../../services/auth";
import { IconArrowLeft } from "@tabler/icons";
import { useAuth } from "../../AuthProvider";

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

export function ForgotPassword() {
  const { onLogOut } = useAuth();
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
    },
  });

  const handleSubmit = () => {
    const data = {
      email: form.values.email,
    };
    forgotPassword(data);
    onLogOut();
  };

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Enter your email to reset it
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput
          {...form.getInputProps("email")}
          label="Your email"
          placeholder="pippen@gmail.com"
          required
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor
            href="/auth/login"
            color="dimmed"
            size="sm"
            className={classes.control}
          >
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5}>Back to login page</Box>
            </Center>
          </Anchor>
          <Button onClick={handleSubmit} className={classes.control}>
            Reset password
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
