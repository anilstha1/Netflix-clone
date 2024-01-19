import {Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
