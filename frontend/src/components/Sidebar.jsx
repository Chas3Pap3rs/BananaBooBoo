import React from 'react';
import ImageHover from './ImageHover';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarCollapsed }) {
  const navigationItems = [
    // ... your navigation items
  ];

  return (
    <div className={`sidebar-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      {/* Only render navigation if sidebar is expanded on small screens */}
      {!isSidebarCollapsed && (
        <ul>
          <div className="sidebar-item">
            <Link to="/frontend/home">
              <li className="btn">Home</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/frontend/banana-scale">
              <li>Banana Scale/Converter</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/frontend/banana-recipes">
              <li>Banana Recipes</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/frontend/banana-books">
              <li>Banana Books</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/frontend/banana-fun-facts">
              <li>Banana Fun Facts</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/frontend/banana-forum">
              <li>Banana Forum</li>
              <ImageHover size="50px" />
            </Link>
          </div>

          {navigationItems.map((item) => (
            <Link to={item.path} key={item.key}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
