import React from 'react';
import {BrowserRouter, Routes,Link, Route, NavLink} from "react-router-dom";


export default function Navigation(){

  return (
  <>
      <nav class="nav nav-pills flex-column flex-sm-row">
    <NavLink className="" aria-current="page" to="/">Home</NavLink> 
     </nav>
    </>
  )
  
}