import { Button, Card, Center, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    width: "250px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

export function CreateResumeCard() {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Center style={{ width: "100%", height: "100%" }}>
        <Button sx={{ height: "50%" }}>+</Button>
      </Center>
    </Card>
  );
}
