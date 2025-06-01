import "./App.css";
import Login from "./components/login";
import Ui from "./components/ui";
import Nav from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Ui />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
