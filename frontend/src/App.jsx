import './App.css'
import Home from './components/Home.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState } from 'react'



function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // ... rest of the component



  return (
    <BrowserRouter>
      <div className="app-container"> {/* Main container for layout */}
        <Header /> {/* Render the header component */}
        <div className="main-content-wrapper">
          <Sidebar /> {/* Render the sidebar component */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home */}
            {/* Add additional routes for other components here */}
          </Routes>
        </div>
        <Footer /> {/* Render the footer component */}
      </div>
    </BrowserRouter>
  );
}

export default App
