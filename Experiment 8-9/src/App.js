// App.js

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabsData = [

    { id: 'home', label: 'Home', content: 'This is the home content.' },
    { id: 'profile', label: 'Profile', content: 'This is the profile content.' },
    { id: 'settings', label: 'Settings', content: 'This is the settings content.' },
    { id: 'counter', label: 'Counter', content: <Counter /> },
    { id: 'contact', label: 'Contact Form', content: <ContactForm /> },
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} tabsData={tabsData} />
        <MainContent activeTab={activeTab} tabsData={tabsData} />
      </div>
    </div>
  );
}

export default App;
