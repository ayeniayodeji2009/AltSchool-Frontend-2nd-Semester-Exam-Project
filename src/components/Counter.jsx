import React from 'react'


const [showBtn, setShowBtn] = useState(true);
const [newNum, setNewNum] = useState(0);
const [hideCounter, setHideCounter] = useState(true);

const initialState = { count: 0 }

const counterReducer = (state, action) => {
  switch (action.type) {
      
    case 'increase':
      return { count: state.count + 1 }
      break;
      
    case 'decrease':
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) }
      break;
    // case 'reset':
    // return { count: state.count = 0 }

    case 'set_value':
    return { count: state.count = 0 }
    break;
      
    default:
      throw new Error('Error occured')
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(counterReducer, initialState)
  return (
    
    <div>
      
      <h2 className="mb-5">React Simple Counter with useReducer Example</h2>
      
        
        <h2>{state.count}</h2>
        
    <button type="button" className="btn btn-danger" onClick={() => {
            dispatch({ type: 'decrease' })
          }}>
          Decrease
        </button>
        
    <button type="button" className="btn btn-success ms-2" onClick={() => {
            dispatch({ type: 'increase' })
          }}>
          Increase
        </button>


  <button type="button" className="btn btn-danger" onClick={() => {
            dispatch({ type: 'reset' }) 
          }}>
           Reset
          </button>

  <button type="button" className="btn btn-danger" onClick={() => {
            dispatch({ type: 'set_value' }) 
          }}>
           set Value
          </button>
      

 
    <button className="counter--set" onClick={e => { setShowBtn(false) }}>Set Value</button>
 
    <button className="counter--set" onClick={e => { setShowBtn(true) }}>Cancel</button>

    <input type="number" className="num_input" onChange={handleInputNewNum} />

    <button className="counter--set" onClick={handleBtnClickNewNum}>Pass Value</button>
 
        </div> 
      )
      }

// {showBtn ? (
//     <button className="counter--set" onClick={e => { setShowBtn(false) }}>Set Value</button>
//             ) : (
//     <>
//     <button className="counter--set" onClick={e => { setShowBtn(true) }}>Cancel</button>
//     <br />
//     <input type="number" className="num_input" onChange={handleInputNewNum} />
//     <br />
//     <button className="counter--set" onClick={handleBtnClickNewNum}>Pass Value</button>
//     </>
//     )}