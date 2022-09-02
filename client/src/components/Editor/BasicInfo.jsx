import React from "react";
import { TextInput, SimpleGrid, Text, createStyles } from "@mantine/core";

function BasicInfo({ form }) {
  return (
    <>
      <TextInput
        styles={(theme) => ({
          input: {
            fontSize: "30px",
          },
        })}
        placeholder="Your name"
        variant="unstyled"
        {...form.getInputProps("name")}
      />

      <Text size="lg" weight={700}>
        Profile
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="First name"
          {...form.getInputProps("first_name")}
          required
        />
        <TextInput
          label="Last name"
          {...form.getInputProps("last_name")}
          required
        />
        <TextInput
          label="Email address"
          {...form.getInputProps("email")}
          required
        />
        <TextInput
          label="Phone Number"
          placeholder="954-643-2434"
          {...form.getInputProps("phone")}
        />
        <TextInput
          label="LinkedIn URL"
          placeholder="www.linkedin.com"
          {...form.getInputProps("linkedin_url")}
        />
        <TextInput
          label="Portfolio URL"
          placeholder="wwww.github.com"
          {...form.getInputProps("portfolio_url")}
        />
      </SimpleGrid>
    </>
  );
}

export default BasicInfo;
