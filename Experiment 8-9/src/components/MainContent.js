// MainContent.js

import React from 'react';

function MainContent({ activeTab, tabsData }) {
  const selectedTab = tabsData.find((tab) => tab.id === activeTab);

  return (
    <main className="main-content">
      <h2>{selectedTab.label}</h2>
      {selectedTab.content}
    </main>
  );
}

export default MainContent;
