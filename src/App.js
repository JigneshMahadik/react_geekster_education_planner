// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [state, setState] = useState([]);

  useEffect(()=>{
    const listData = JSON.parse(localStorage.getItem("list"));
    console.log(listData);
    if(listData){
      setState(listData);
    }
  },[]);

  // console.log("baher",state);

  const add = ()=>{
    const sub = document.getElementById("subject").value;
    const hr = parseInt(document.getElementById("hour").value);
    setState([...state,{subject : sub, hours : hr}]);
    localStorage.setItem("list",JSON.stringify([...state,{subject : sub, hours : hr}]));
  }

  function btnIncrease(id){
    const list = JSON.parse(localStorage.getItem("list"));
    list[id].hours = parseInt(list[id].hours)+1;
    setState(list);
    localStorage.setItem("list",JSON.stringify(list));
  }
  function btnDecrease(id){
    const list = JSON.parse(localStorage.getItem("list"));
    if(list[id].hours != 0){
      list[id].hours = parseInt(list[id].hours)-1;
      setState(list);
      localStorage.setItem("list",JSON.stringify(list));
    }
  }
  return (
    <div id="main-container">
      <div>
        <h2>Geekster Education Planner</h2>
        <input type="text" id="subject" placeholder="Subject"/>
        <input type="number" id="hour" placeholder="Hour"/>
        <button id="btn-add" onClick={add}>Add</button>
      </div>
      <div id='record-cont'>
        {/* <div id="record-wrapper">
          {
            state.map((item,id)=>{
              return(
              <div key={id} id='rows'>
                <div>
                  <p>{item.subject} - </p>
                  <p>{item.hours} Hours</p>
                </div>
                <div id="btnPlusMinus">
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
              )
            })
          }
        </div> */}
        {
          state.map((item,id)=>{
            return(
            <div id='row' key={id}>
              <p>{item.subject}</p>
              <p>{item.hours} Hours</p>
              <div id='btnInDec'>
                <button onClick={()=>{btnIncrease(id)}}>+</button>
                <button onClick={()=>{btnDecrease(id)}}>-</button>
              </div>
            </div>
          )
          })
        }
      </div>
    </div>
  );
}

export default App;
