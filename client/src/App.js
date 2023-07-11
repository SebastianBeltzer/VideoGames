import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/landing/landing";
import Home from "./components/home/home";
import Dealit from "./components/detail/detail";
import Nav from "./components/nav/nav";
import Error from "./components/error/error";
import Mygames from "./components/myGames/myGames";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/Home" ? (
        <Nav />
      ) : null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/:id" element={<Dealit />} />
        <Route path="/Mygames" element={<Mygames />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
