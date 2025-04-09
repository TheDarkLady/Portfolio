import { Button, Container, Typography } from "@mui/material"

const Banner = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
        <Typography sx={{fontFamily:"Roboto", fontSize:"50px", fontWeight:"600"}}>Hello, I'm Lakshmi Chaithanya</Typography>
        <Typography
          sx={{
            background: 'linear-gradient(to right, #3E92CC, #945DD6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold', 
            fontSize: '50px',
            fontFamily: 'Roboto',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Frontend Developer
        </Typography>
        <Typography sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "400", width: "500px", textAlign: "left", marginBottom: "50px" }}>
          I am a frontend developer with a passion for creating beautiful and functional web applications. I have experience in React, JavaScript, and CSS.
          I am always eager to learn new technologies and improve my skills.
        </Typography>
        <Button sx={{background: 'linear-gradient(to right, #3E92CC, #945DD6)', padding:"20px 20px", color:"#fff", borderRadius:"60px"}}>Download CV</Button>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
       
      </Container>
    </Container>
  )
}

export default Banner
