/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname.replace('/', '').toUpperCase();
    const validTabs = ['HOME', 'DOCTORS', 'DEPARTMENT', 'SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'BLOG', 'CONTACT'];
    if (path === 'DEPARTMENTS') return 'DEPARTMENT'; // Handle plural alias
    return validTabs.includes(path) ? path : 'HOME';
  });

  // Update URL and scroll when tab changes
  useEffect(() => {
    const path = activeTab === 'HOME' ? '/' : `/${activeTab.toLowerCase().replace('department', 'departments')}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '').toUpperCase();
      const validTabs = ['HOME', 'DOCTORS', 'DEPARTMENT', 'SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'BLOG', 'CONTACT'];
      if (path === 'DEPARTMENTS') setActiveTab('DEPARTMENT');
      else setActiveTab(validTabs.includes(path) ? path : 'HOME');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case 'HOME':
        return <Home setActiveTab={setActiveTab} />;
      case 'DOCTORS':
        return <Doctors />;
      case 'DEPARTMENT':
        return <Departments />;
      case 'SERVICES':
        return <Services />;
      case 'GALLERY':
        return <Gallery />;
      case 'ACHIEVEMENTS':
        return <Achievements />;
      case 'BLOG':
        return <Blog setActiveTab={setActiveTab} />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
