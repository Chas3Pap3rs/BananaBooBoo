import{ useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import BananaScale from './components/BananaScale';
import BananaRecipes from './components/BananaRecipes';
import BananaFunFacts from './components/BananaFunFacts';
import BananaForum from './components/BananaForum';
import BananaBooks from './components/BananaBooks';

import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header isSidebarCollapsed={isSidebarCollapsed} />
        <div className="main-content-wrapper">
          <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
          <Routes>
            <Route path="frontend/home" element={<Home />} />
            <Route path="frontend/login" element={<Login />} />
            <Route path="frontend/banana-scale" element={<BananaScale />} />
            <Route path="frontend/banana-recipes" element={<BananaRecipes />} />
            <Route path="frontend/banana-fun-facts" element={<BananaFunFacts />} />
            <Route path="frontend/banana-forum" element={<BananaForum />} />
            <Route path="frontend/banana-books" element={<BananaBooks />} />
            {/* Add additional routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;








// import './App.css';
// import Home from './components/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React, { useState } from 'react';

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Header isSidebarCollapsed={isSidebarCollapsed} /> {/* Pass isSidebarCollapsed as prop */}
//         <div className="main-content-wrapper">
//           <Sidebar isSidebarCollapsed={isSidebarCollapsed} /> {/* Ensure Sidebar also receives the prop */}
//           <Routes>
//             <Route path="/home" element={<Home />} />
//             {/* Add additional routes for other components here */}
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
