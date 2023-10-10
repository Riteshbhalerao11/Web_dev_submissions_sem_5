// Sidebar.js

import React from 'react';

function Sidebar({ activeTab, onTabChange, tabsData }) {
  return (
    <aside className="sidebar">
      <ul>
        {tabsData.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
