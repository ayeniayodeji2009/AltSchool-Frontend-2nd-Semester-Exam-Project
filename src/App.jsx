import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import './App.css';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './components/PageNotFound';
import CounterApp from './components/CounterApp';
//import Counter from './Counter';






export default function App() {

  return (
    <section>
      <SEO />
      
      <BrowserRouter>
        <Routes>

          <Route index element={
            <ErrorBoundary>
              <CounterApp />
              {/* <Counter /> */}
            </ErrorBoundary>
          } />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}



