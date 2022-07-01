import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Govenment from "./pages/government/Govenment";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import SciencePage from "./pages/science/SciencePage";
import ComputerPage from "./pages/tecnology/ComputerPage";
import Tecnology from "./pages/tecnology/Tecnology";
import Pagoda from "./pages/travelling/Pagoda";
import Travel from "./pages/travelling/Travel";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Tecnology />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/govenment" element={<Govenment />} />
        <Route path="/history" element={<History />} />
        <Route path="/science" element={<SciencePage />} />
      </Routes>
    </div>
  );
}

export default App;
