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
import { resendConfirm } from "../../services/auth";
import { IconArrowLeft } from "@tabler/icons";

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

export function Resend() {
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
    resendConfirm(data);
  };

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Need a confirmation email?
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Enter your email to get a new link
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
            Confirm Email
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
