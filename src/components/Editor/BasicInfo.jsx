import React from "react";
import { TextInput, SimpleGrid, Text } from "@mantine/core";

function BasicInfo({ form }) {
  return (
    <>
      <Text size="lg" weight={700}>
        Profile
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="First name"
          {...form.getInputProps("basics.first_name")}
          required
        />
        <TextInput
          label="Last name"
          {...form.getInputProps("basics.last_name")}
          required
        />
        <TextInput
          label="Email address"
          {...form.getInputProps("basics.email")}
          required
        />
        <TextInput
          label="Phone Number"
          placeholder="954-643-2434"
          {...form.getInputProps("basics.phone")}
        />
        <TextInput
          label="LinkedIn URL"
          placeholder="www.linkedin.com"
          {...form.getInputProps("basics.linkedin_url")}
        />
        <TextInput
          label="Portfolio URL"
          placeholder="wwww.github.com"
          {...form.getInputProps("basics.portfolio_url")}
        />
      </SimpleGrid>
    </>
  );
}

export default BasicInfo;
