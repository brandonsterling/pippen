import { Title, Center, Loader } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmUser } from "../../services/auth";
import { showNotification } from "@mantine/notifications";

export function Confirm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useAuth();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    confirmUser(id).then((result) => {
      if (result.data.msg == "confirmed") {
        showNotification({
          title: "Success!",
          color: "green",
          message: "We've confirmed your account. You're all set to log in!",
        });
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
      {!confirmed && (
        <Center mt="50px">
          <Loader color="indigo" />
        </Center>
      )}
    </>
  );
}
