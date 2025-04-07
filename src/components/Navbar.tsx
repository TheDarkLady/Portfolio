import { Button, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Container
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      {/* Desktop */}
      <Container
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "row",
          justifyContent: "space-between",
          position: "fixed",
        }}
      >
        <Container sx={{ fontSize: "30px", fontWeight: "500" }}>
          Lakshmi Chaithanya
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontFamily: "Poppins",
            gap: "10px",
          }}
        >
          <a>About me</a>
          <a>Skills & Tools</a>
          <a>Experience</a>
          <a>Projects</a>
          <a>Education</a>
        </Container>
      </Container>

      {/* mobile */}
      <Container sx={{display: { xs: "flex", md: "none" }, flexDirection:"column", zIndex:"99", position:"fixed"}}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap:"nowrap",
          justifyContent: "space-between",
          position: "absolute",
          top:"0px",
         
        }}
      >
        <Container sx={{ fontSize: "20px", fontWeight: "500"}}>
          Lakshmi Chaithanya
        </Container>
      <Container sx={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
        <Button>
          <MenuIcon sx={{color:"#fff"}}/>
        </Button>
      </Container>
      </Container>
      <Container sx={{position:"absolute", top:"50px" }}>
        <ul>
          <li>About Me</li>
          <li>Skills & Tools</li>
          <li>Experience</li>
          <li>projects</li>
          <li>Education</li>
        </ul>
      </Container>
      </Container>
    </Container>
  );
};

export default Navbar;
