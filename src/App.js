import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Beautyblogger from "./pages/beauty/Beautyblogger";
import Clinicpage from "./pages/beauty/Clinicpage";
import Makeuppage from "./pages/beauty/makeupPage";
import SalonPage from "./pages/beauty/SalonPage";
import Skinpage from "./pages/beauty/Skinpage";
import Health from "./pages/healthpage/Health";
import Home from "./pages/home/Home";
import ExercisePage from "./pages/lifestylepage/exercisePage";
import Lifestyle from "./pages/lifestylepage/Lifestyle";
import SciencePage from "./pages/science/SciencePage";
import ComputerPage from "./pages/tecnology/ComputerPage";
import Tecnology from "./pages/tecnology/Tecnology";
import Travel from "./pages/travelling/Travel";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Tecnology />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/lifestyles" element={<Lifestyle />} />
        <Route path="/Blogger" element={<Beautyblogger />} />
        <Route path="/clinic" element={<Clinicpage />} />
        <Route path="/makeup" element={<Makeuppage />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/skincare" element={<Skinpage />} />
        <Route path="/exercise" element={<ExercisePage />} />

      </Routes>
    </div>
  );
}

export default App;
