import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";
import './App.css';
import Navigation from './Navigation';



export default function CounterApp() {

  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  const [showBtn, setShowBtn] = useState(true);


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




  {/*setCounter(prevCount => prevCount = document.getElementById('quantity').vaule)*/ }

  {/* */ }


  //set value
  function getValue(val) {
    //  val.preventDefault()
    console.log(val.target.value)

    let setVal = val.target.value;
    console.log("Input value is now a " + typeof setVal)

    const convertSetValToNum = parseInt(setVal, 10) //input converted to number on 10 as the radix number system
    console.log("Input value is now a " + typeof convertSetValToNum)
    setCounter(prevCount => prevCount = convertSetValToNum)
  }


  function Btn() {
    return (
      <>
        <input type="number" max="99999" onChange={getValue} />
        {/*   <button className="counter--set" onClick={e => {setShowBtn(true)}}>Cancel</button> */}
      </>
    )
  }

  return (
    <main>
     {/* <Navigation /> */}
      <header>
        <h1 className="header">AltSchool Frontend 2nd Semester Examination Project</h1>
      </header>
      <section>
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
                    <input type="number" className="num_input" onChange={getValue} />
                    <button className="counter--set" onClick={e => { setShowBtn(true) }}>Cancel</button>
                  </>
                )
                }


              </td>
              <td></td>
            </tr>
            <tr>
              <td><button className="counter--minus" title="Decrease Value" onClick={subtract}>-</button></td>
              <td>
                <div className="counter--count--background">
                  <h1 className="counter--result">{counter}</h1>
                </div>
              </td>
              <td><button className="counter--plus" title="Increase Value" onClick={add}>+</button></td>
            </tr>
            <tr>
              <td></td>
              <td><button className="counter--reset" onClick={reset}>Reset Counter</button></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/*
        <input type="number" max="99999" onChange={getValue} />
        
         <div className="counter">
        <button className="counter--minus" onClick={subtract}>-</button>
        <div className="counter--count--background">
        <h1>{counter}</h1>
        </div>
        <button className="counter--plus" onClick={add}>+</button>
      </div>
        */}
      </section>
    </main>
  )
}