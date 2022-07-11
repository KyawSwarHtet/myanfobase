import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Beautyblogger from "./pages/beauty/Beautyblogger";
import Makeuppage from "./pages/beauty/makeupPage";
import SalonPage from "./pages/beauty/SalonPage";
import Skinpage from "./pages/beauty/Skinpage";
import ExercisePage from "./pages/lifestylepage/exercisePage";
import Lifestyle from "./pages/lifestylepage/Lifestyle";
import Govenment from "./pages/government/Govenment";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import ComedyPage from "./pages/literature/ComedyPage";
import DramaPage from "./pages/literature/DramaPage";
import FictionPage from "./pages/literature/FictionPage";
import LiteraturePage from "./pages/literature/LiteraturePage";
import NovelPage from "./pages/literature/NovelPage";
import PoetryPage from "./pages/literature/PoetryPage";
import RomancePage from "./pages/literature/RomancePage";
import ShortstoryPage from "./pages/literature/ShortstoryPage";
import AstronomyPage from "./pages/science/AstronomyPage";
import BilologyPage from "./pages/science/BilologyPage";
import ChemistryPage from "./pages/science/ChemistryPage";
import EarthSciencePage from "./pages/science/EarthSciencePage";
import MammalsPage from "./pages/science/MammalsPage";
import PhysicsPage from "./pages/science/PhysicsPage";
import PlantsPage from "./pages/science/PlantsPage";
import SciencePage from "./pages/science/SciencePage";
import ComputerPage from "./pages/tecnology/ComputerPage";
import ElectronicPage from "./pages/tecnology/ElectronicPage";
import InnovationPage from "./pages/tecnology/InnovationPage";
import SmartphonePage from "./pages/tecnology/SmartphonePage";
import SoftwarePage from "./pages/tecnology/SoftwarePage";
import TecnologyPages from "./pages/tecnology/TecnologyPage";

import Advanture from "./pages/travelling/Advanture";
import Beach from "./pages/travelling/Beach";
import Mountain from "./pages/travelling/Mountain";
import Pagoda from "./pages/travelling/Pagoda";
import Travel from "./pages/travelling/Travel";
import Waterfall from "./pages/travelling/Waterfall";
import FamilyPage from "./pages/lifestylepage/familyPage";
import LuxuryPage from "./pages/lifestylepage/luxuryPage";
import ModernPage from "./pages/lifestylepage/modernPage";
import HealthyLifePage from "./pages/lifestylepage/healthyPage";
import BeautyClinicpage from "./pages/beauty/Clinicpage";
import Healthpage from "./pages/healthpage/HealthPage";
import HealthClinicPage from "./pages/healthpage/HealthClinicPage";
import Hfoodspage from "./pages/healthpage/HfoodsPage";
import InfodoctorPage from "./pages/healthpage/InfodoctorPage";
import MedicinePage from "./pages/healthpage/MedicinePage";
import Yogapage from "./pages/healthpage/YogaPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<TecnologyPages />} />

        <Route path="/travel" element={<Travel />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/mountains" element={<Mountain />} />
        <Route path="/Advanture_trip" element={<Advanture />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/electronic" element={<ElectronicPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/smartphone" element={<SmartphonePage />} />
        <Route path="/software" element={<SoftwarePage />} />

        <Route path="/beauty" element={<Beauty />} />
        <Route path="/healthylife" element={<HealthyLifePage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/lifestyles" element={<Lifestyle />} />
        <Route path="/Blogger" element={<Beautyblogger />} />
        <Route path="/makeup" element={<Makeuppage />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/skincare" element={<Skinpage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/beautyclinic" element={<BeautyClinicpage />} />

        <Route path="/govenment" element={<Govenment />} />
        <Route path="/history" element={<History />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/astronomy" element={<AstronomyPage />} />
        <Route path="/biology" element={<BilologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/earthscience" element={<EarthSciencePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/mammals" element={<MammalsPage />} />

        <Route path="/literature" element={<LiteraturePage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/luxury" element={<LuxuryPage />} />
        <Route path="/poetry" element={<PoetryPage />} />
        <Route path="/fiction" element={<FictionPage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        <Route path="/novel" element={<NovelPage />} />
        <Route path="/shortstory" element={<ShortstoryPage />} />
        <Route path="/romance" element={<RomancePage />} />
        <Route path="/modern" element={<ModernPage />} />
        <Route path="/health" element={<Healthpage />} />
        <Route path="/healthclinic" element={<HealthClinicPage />} />
        <Route path="/hfoods" element={<Hfoodspage />} />
        <Route path="/infodoctor" element={<InfodoctorPage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/yoga" element={<Yogapage />} />
      </Routes>
    </div>
  );
}

export default App;
