import React from "react";
import { Hero } from "../components/Hero";
import { NavHeader } from "../components/NavHeader";
import { Box } from "@mantine/core";
import Companies from "../components/Companies";
import { Features } from "../components/Features";
function Home() {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <NavHeader />
        <Box
          sx={{ height: "680px", width: "100%", backgroundColor: "#f7f9fc" }}
        >
          <Hero />
        </Box>
        {/* <Companies /> */}
      </Box>
    </>
  );
}

export default Home;
