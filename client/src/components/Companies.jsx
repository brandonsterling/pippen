import { Image, Center, Box, SimpleGrid, Container } from "@mantine/core";
import React from "react";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import robinhood from "../images/robinhood.png";
import stripe from "../images/stripe.png";

function Companies() {
  return (
    <Box sx={{ backgroundColor: "white", pt: "30px", pb: "30px" }}>
      <Container size="lg">
        <SimpleGrid
          sx={{ backgroundColor: "white" }}
          width="50%"
          spacing={30}
          cols={4}
        >
          <Image pt={29} width="130px" src={google}></Image>
          <Image pb={10} width="170px" src={facebook}></Image>
          <Image width="190px" src={robinhood}></Image>
          <Image pt={24} width="130px" src={stripe}></Image>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Companies;
