import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import PageNotFound from './PageNotFound';
import CounterApp from './CounterApp';
//import Counter from './Counter';






export default function App() {

  return (
    <section>
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



