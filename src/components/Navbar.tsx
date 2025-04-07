import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false)

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }
  return (
    <Box sx={{zIndex: 1,}}>
      {/* Desktop Navbar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>
          Lakshmi Chaithanya
        </Typography>
        <Box sx={{ display: "flex", gap: 3, fontFamily: "Poppins" }}>
          <a>About me</a>
          <a>Skills & Tools</a>
          <a>Experience</a>
          <a>Projects</a>
          <a>Education</a>
        </Box>
      </Box>

      {/* Mobile Navbar */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000",
          color: "#fff",
          zIndex: 1300,
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
            Lakshmi Chaithanya
          </Typography>
          <Button onClick={handleHamburgerMenu} sx={{display:hamburgerMenu ? "none" : "flex"}}>
            <MenuIcon sx={{ color: "#fff" }} />
          </Button>
          <Button onClick={handleHamburgerMenu} sx={{display:hamburgerMenu ? "flex" : "none"}}>
            <CloseIcon sx={{ color: "#fff" }}/>
          </Button>
        </Box>
        <Box sx={{ marginTop: "10px", display:hamburgerMenu ? "block" : "none" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display:"flex", flexDirection:"column", gap:"20px" }}>
            <li>About Me</li>
            <li>Skills & Tools</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Education</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
