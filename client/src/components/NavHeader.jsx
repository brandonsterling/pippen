import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Image,
  Burger,
  Container,
  Title,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaChevronDown, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useAuth } from "../AuthProvider";
import { useHover } from "@mantine/hooks";
const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  button: {
    backgroundColor: "#408af8",
    "&:hover": {
      backgroundColor: theme.fn.darken("#102444", 0.09),
    },
  },

  textButton: {
    color: "#408af8",
    backgroundColor: "#00000",
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.fn.darken("#102444", 0.09),
    },
  },
}));

export function NavHeader({ hideLogin, hideLogout }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { onLogout, token } = useAuth();
  const { hovered, ref } = useHover();

  const links = [
    {
      label: "Templates",
      link: "/templates",
    },
    {
      label: "Pricing",
      link: "/pricing",
    },
  ];

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <FaChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header sx={{ backgroundColor: "#f7f9fc" }} height={80} pt={20}>
      <Container size="lg">
        <div className={classes.inner}>
          <Image width={150} src={logo}></Image>
          {/* <Title>Pippen</Title> */}
          {/* <Group align={left} spacing={1} className={classes.links}>
            {items}
          </Group> */}
          {token && !hideLogout && (
            <Button
              variant="outline"
              sx={{ borderRadius: "16.5px" }}
              onClick={onLogout}
            >
              Log Out
            </Button>
          )}
          {!hideLogin && (
            <Group spacing={8}>
              <Button
                className={classes.textButton}
                sx={{ borderRadius: "16.5px" }}
                variant="subtle"
                onClick={() => navigate("/auth/login")}
              >
                Sign In
              </Button>
              <Button
                ref={ref}
                className={classes.button}
                rightIcon={hovered ? <FaArrowRight /> : <FaChevronRight />}
                sx={{ borderRadius: "16.5px" }}
                onClick={() => navigate("/auth/register")}
              >
                Sign Up
              </Button>
            </Group>
          )}
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}
