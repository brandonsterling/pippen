import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Box,
  List,
  ThemeIcon,
  SimpleGrid,
  Grid,
} from "@mantine/core";
import resume from "../images/resume.png";
import Typewriter from "typewriter-effect";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import { useHover } from "@mantine/hooks";

import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    // display: "flex",
    // justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 680,
    marginRight: theme.spacing.xl * 2,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 65,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 35,
    },
  },

  control: {
    backgroundColor: "#408af8",
    "&:hover": {
      backgroundColor: theme.fn.darken("#102444", 0.09),
    },

    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    marginLeft: "5px",
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function Hero() {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  const navigate = useNavigate();
  return (
    <Container size="lg">
      <Grid className={classes.inner}>
        <Grid.Col span={7}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Build an industry-tested resume and become a
              <Text
                variant="gradient"
                gradient={{ from: "#408af8", to: "#3ecf8e" }}
              >
                <Typewriter
                  options={{
                    delay: 75,
                    strings: [
                      "<strong>Product Manager</strong>",
                      "Data Analyst",
                      "Recruiter",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
            </Title>
            <Text color="dimmed" mt="md">
              Use professional field-tested resume templates that follow the
              exact ‘resume rules’ employers look for. Easy to use and done
              within minutes - try now for free!
            </Text>
            <Group mt={30}>
              <Button
                ref={ref}
                rightIcon={hovered ? <FaArrowRight /> : <FaChevronRight />}
                component="a"
                href="/auth/register"
                onClick={() => navigate("/auth/register")}
                radius="xl"
                size="md"
                className={classes.control}
              >
                Get started
              </Button>
            </Group>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image className={classes.image} width="600px" src={resume}></Image>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
