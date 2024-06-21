import React from 'react';

function Sidebar({ isSidebarCollapsed }) {
  const navigationItems = [
    // ... your navigation items
  ];

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      {/* Only render navigation if sidebar is expanded on small screens */}
      {!isSidebarCollapsed && (
        <ul>
            <li>Home</li>
            <li>Banana Scale/Converter</li>
            <li>Banana Recipes</li>
            <li>Banana Books</li>
            <li>Banana Fun Facts</li>
            <li>Banana Forum</li>
          {navigationItems.map((item) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
