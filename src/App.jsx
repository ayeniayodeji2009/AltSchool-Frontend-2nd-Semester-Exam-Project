import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import './App.css';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './components/PageNotFound';
import CounterApp from './components/CounterApp';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { AnimatePresence } from 'framer-motion';








export default function App() {

  return (
    <section>
      <AnimatePresence>
      <SEO />
      
      <BrowserRouter>
        <Routes>

          <Route index element={
            <ErrorBoundary>
              <CounterApp />
            </ErrorBoundary>
          } />

          <Route path="/about" element={
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          } />
          
          <Route path="/contact" element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          } />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </AnimatePresence>
    </section>
  )
}



