import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/userdetail/:id" element={<DetailScreen />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
