/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Connect from './pages/Connect';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import SEO from './components/SEO';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Background from './components/Background';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeLanguageProvider>
        <Router>
          <SEO />
          <CustomCursor />
          <ScrollProgress />
          <Background />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </ThemeLanguageProvider>
    </HelmetProvider>
  );
};

export default App;
