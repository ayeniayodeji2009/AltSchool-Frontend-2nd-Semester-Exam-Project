import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import {BrowserRouter, Router,Link, Route, Switch} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
// import PageNotFound from './PageNotFound';
import './App.css';
import CounterApp from './CounterApp';




export default function App() {

  return (
    <section> 
            <ErrorBoundary>
            <CounterApp />
            </ErrorBoundary> 

    </section>
    )
}



