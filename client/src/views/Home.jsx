import React from "react";
import { Hero } from "../components/Hero";
import { NavHeader } from "../components/NavHeader";
import { Box, Space } from "@mantine/core";
import Companies from "../components/Companies";
import { Features } from "../components/Features";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "#f6f9fc",
        }}
      >
        <NavHeader hideLogout={true} />
        <Box
          sx={{
            marginBottom: "100px",
            height: "680px",
            width: "100%",
          }}
        >
          <Hero />
        </Box>
        <Banner />
        {/* <Box sx={{ marginTop: "450px", paddingBottom: "200px" }}> */}
        {/* <Features /> */}
        {/* </Box> */}
        {/* <Companies /> */}
      </Box>
    </>
  );
}

export default Home;
