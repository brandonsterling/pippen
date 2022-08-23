import React from "react";
import { Alert, Anchor } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import { authReasons } from "../../constants/auth";

function Error({ error }) {
  if (error === null) return null;
  const template = authReasons[error.reason];
  console.log(template);
  return (
    <Alert
      mt={30}
      icon={<IconAlertCircle size={16} />}
      title="Bummer!"
      color={template.color}
    >
      {template.message}{" "}
      {template.link && (
        <Anchor href={template.link}>Click here to resend verification</Anchor>
      )}
    </Alert>
  );
}

export default Error;
