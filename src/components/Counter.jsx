import React, {useReducer, useState} from 'react';




export default function Counter(){
  const [showBtn, setShowBtn] = useState(true);  //set value show/hide button
  const [hideCounter, setHideCounter] = useState(true); //counter app show/hide button




//initializing initialState
const initialState = {
  count: 0,
  customInput: ""
};

// The reducer function
function reducer(state, action){
  switch (action.type){
    case "increment":
      return { ...state, count: state.count + 1}; //increment
      break;

    case "decrement":
      return { ...state, count: state.count - 1}; //decrement
      break;

    case "reset":
      return initialState; //reset value
      break;

    case "setValue":
      return { ...state, count: state.count = parseInt(state.customInput, 10) //converts setValueInput to number and assign it to the count state
             };
      break;

    case "setValueInput":
      return { ...state, customInput: action.payload};//receives setValueInput and save it to customIput variable (property of initialState)
      break;

    default:
      throw new Error();
  }
}

//initializing useReducer() hook
const [state, dispatch] = useReducer(reducer, initialState);

//function for events
function increment(){
  dispatch({ type: "increment" }); //increment
}

function decrement(){
  dispatch({ type: "decrement" }); //decrement
}

function reset(){
  dispatch({ type: "reset" }); //reset to default value state
}

function setValueInput(event){
  dispatch({ type: "setValueInput", payload: event.target.value }); // event to receive input value(string by default) and set it to setValue state
}

function setValue(){
  dispatch({ type: "setValue" }); //event to pass setValue to count state
}
  console.log(setValue)


return(
  <>
    {/*  <h1>{state.count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br />
    <input type="number" placeholder="Pass Value" onChange={setValueInput} />
    <button onClick={setValue}>Pass Value</button>
    <button onClick={reset}>Reset</button>
    */}



          <section>
        { hideCounter ? (
          <>
          <button className="counter--set show-counter-app" onClick={e => { setHideCounter(false) }}>Show Counter App made with useReducer() hook</button>
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
                    
                    <input type="number" className="num_input" onChange={setValueInput} />
                    
                    <br />
                    
                    <button className="counter--set" onClick={setValue}>Pass Value</button>
                    
                  </>
                )
                }


              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                
                <button className="counter--minus" title="Decrease Value" onClick={decrement}>-</button>
              
              </td>
              <td>
                <div className="counter--count--background_2">
                  <h1 className="counter--result">{state.count}</h1>
                </div>
              </td>
              <td>
                
                <button className="counter--plus" title="Increase Value" onClick={increment}>+</button>
              
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


    
  </>
)
}

