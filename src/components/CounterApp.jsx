import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";
import '../App.css';


import Navigation from './Navigation';



export default function CounterApp() {


  
  const [counter, setCounter] = useState(0);  //display of counter
  const [showBtn, setShowBtn] = useState(true);  //set value show/hide button
  const [newNum, setNewNum] = useState(0); //set value new number
  const [hideCounter, setHideCounter] = useState(true); //counter app show/hide button


  
  // const handleHideCounter = () => {
  //   setHideCounter(setHideCounter => setHideCounter = false)
  // }

  const handleDisplay = () => {
    setDisplay(prevDisplay => prevDisplay = true)
  }

  //subtract
  const subtract = () => {
    setCounter(prevCount => prevCount - 1)
  }
  
  //add
  const add = () => {
    setCounter(prevCount => prevCount + 1);
  }

  //reset
  const reset = () => {
    setCounter(prevCount => prevCount = 0)
  }


  //set value
   const handleInputNewNum = (event) => {
     event.preventDefault()
    const setValEvent = event.target.value;  //Value from input field
    console.log("Input value is now a " + typeof setVal)
    const convertSetValToNum = parseInt(setValEvent, 10); //input converted to number on 10 as the radix
    setNewNum( newNum => newNum = convertSetValToNum );
  };

  
  //set value pass to counter
   const handleBtnClickNewNum = () => {
          event.preventDefault()
    console.log('>>>>', newNum);  // testing 1
         console.log(typeof newNum); // testing 2
     setCounter(prevCount => prevCount = newNum)  // Assigning set value from input to counter state
  };

  
  return (
    <main>
     {/* <Navigation /> */}
      <header>
        <h1 className="header">AltSchool Frontend 2nd Semester Examination Project</h1>
      </header>
      <section>
        { hideCounter ? (
          <>
          <button className="counter--set show-counter-app" onClick={e => { setHideCounter(false) }}>Show Counter App</button>
          </>
        ) : (
      <>
      <table>
          <tbody>
            <tr>
              <td></td>
              <td>
                <br />
                {showBtn ? (
                  <button className="counter--set" onClick={e => { setShowBtn(false) }}>Set Value</button>
                ) : (
                  <>
                    <button className="counter--set" onClick={e => { setShowBtn(true) }}>Cancel</button>
                    <br />
                    
                    <input type="number" className="num_input" onChange={handleInputNewNum} />
                    
                    <br />
                    
                    <button className="counter--set" onClick={handleBtnClickNewNum}>Pass Value</button>
                    
                  </>
                )
                }


              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                
                <button className="counter--minus" title="Decrease Value" onClick={subtract}>-</button>
              
              </td>
              <td>
                <div className="counter--count--background">
                  <h1 className="counter--result">{counter}</h1>
                </div>
              </td>
              <td>
                
                <button className="counter--plus" title="Increase Value" onClick={add}>+</button>
              
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                
                <button className="counter--reset" onClick={reset}>Reset Counter</button>
              
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      
      <button className="counter--set hide-counter-app" onClick={e => { setHideCounter(true) }}>Hide Counter App</button>
    </>
        )}
      
      </section>
    </main>
  )
}