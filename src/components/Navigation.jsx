import React from 'react';
import {BrowserRouter, Routes,Link, Route, NavLink} from "react-router-dom";



export default function Navigation(){

  return (
      <section class="navigation">
      <img src="https://digestafrica.com/storage/images/3d0dd4108f2daa029fb0.jpg" width="10%"/>
      
      
      <nav class="nav">
        <NavLink className="nav_inner" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav_inner" aria-current="page" to="/about">About</NavLink>
        <NavLink className="nav_inner" aria-current="page" to="/contact">Contact </NavLink>
     </nav>
      </section>
  )
  
}