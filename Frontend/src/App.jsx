import React from "react";
import { Routes, Route } from "react-router-dom";

// Global Components

import MainHeader from "./components/Header";
import MainFOOTER from "./components/Footer";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import CompanyProfile from "./pages/CompanyProfile";
import Mission from "./pages/Mission";
import Director from "./pages/Director";
import Certificate from './pages/Certificate'; 
import Customer from "./pages/Customer";
import Partners from "./pages/Partners"
import Contact from "./pages/Contact";

// Service Pages
import ActiveNetworking from "./pages/services/ActiveNetworking";
import WirelessMobility from "./pages/services/WirelessMobility";
import StructuredCabling from "./pages/services/StructuredCabling";
import SurveillanceSolution from "./pages/services/SurveillanceSolution";
import DataCentre from "./pages/services/DataCentre";
import AudioVideoSolutions from "./pages/services/AudioVideoSolutions";
import AccessControlSystem from "./pages/services/AccessControlSystem";
import TouchPanelKiosk from "./pages/services/TouchPanelKiosk";
import DeploymentSolutions from "./pages/services/DeploymentSolutions";
import IndustrialPC from "./pages/services/IndustrialPC";

function App() {
  return (
    <div className="font-sans text-gray-800">

      <MainHeader />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certificate />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />

        {/* About Dropdown Routes */}
        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="/about/our-mission" element={<Mission />} />
        <Route path="/about/our-director" element={<Director />} />

        {/* Service Detail Routes */}
        <Route path="/services/active-networking" element={<ActiveNetworking />} />
        <Route path="/services/wireless-mobility" element={<WirelessMobility />} />
        <Route path="/services/structured-cabling" element={<StructuredCabling />} />
        <Route path="/services/surveillance-solution" element={<SurveillanceSolution />} />
        <Route path="/services/data-centre" element={<DataCentre />} />
        <Route path="/services/audio-video-solutions" element={<AudioVideoSolutions />} />
        <Route path="/services/access-control-system" element={<AccessControlSystem />} />
        <Route path="/services/touch-panel-kiosk" element={<TouchPanelKiosk />} />
        <Route path="/services/deployment-solutions" element={<DeploymentSolutions />} />
        <Route path="/services/industrial-pc" element={<IndustrialPC />} />
      </Routes>

      <MainFOOTER />
    </div>
  );
}

export default App;