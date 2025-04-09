import "./App.css";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skils from "./components/Skils";

function App() {
  return (
    <div style={{ position: "relative", paddingTop: "100px" }}>
      <Navbar />
      <Banner />
      {/* <Skils /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Education /> */}
      {/* <Contact /> */}
    </div>
  );
}


export default App;
