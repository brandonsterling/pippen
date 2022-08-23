import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Routes, Route } from "react-router-dom";
import { Confirm } from "./Confirm";
import { Resend } from "./Resend";
import { NavHeader } from "../../components/NavHeader";
import Error from "./Error";
import { Container } from "@mantine/core";
import { useAuth } from "../../AuthProvider";

function Auth() {
  const { error } = useAuth();

  return (
    <>
      <NavHeader hideLogin="true" />
      <Container size={550} my={120}>
        <Routes>
          <Route path="/login" exact element={<Login error={error} />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/resend" exact element={<Resend />} />
          <Route path="/confirm/:id" exact element={<Confirm />} />
        </Routes>
        <Error error={error} />
      </Container>
    </>
  );
}

export default Auth;
