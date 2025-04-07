import { Container } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Container
      sx={{ display: "flex", position: "relative", justifyContent: "center", padding:"20px" }}
    >
      <Container
        sx={{
          display: {
            xs:"none",
            md:"flex"
          },
          flexDirection: "row",
          justifyContent: "space-between",
          position: "fixed",
        }}
      >
        <Container sx={{fontSize:"30px",
            fontWeight:"500"}}>Lakshmi Chaithanya</Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontFamily:"Poppins",
            gap:"10px"
          }}
        >
          <a>About me</a>
          <a>Skills & Tools</a>
          <a>Experience</a>
          <a>Projects</a>
          <a>Education</a>
        </Container>
      </Container>
    </Container>
  );
};

export default Navbar;
