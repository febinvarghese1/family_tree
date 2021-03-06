import styledComponents from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}

const Container = styledComponents.div``;
export default App;
