import React , { useState } from 'react';
import './App.css';
import Open from './components/Open';
import ResponsivCall from './ResponsivCall';

const App = () => {
  
  const [ close , setClose ] = useState(false)

    setTimeout(()=>{
        setClose(true)
    },1000)

  return (
    <div className="app">

      <ResponsivCall/>

      {
        !close && 
        <div className="opening">
          <Open due={.8}/>
          <Open due={1}/>
          <Open due={1}/>
          <Open due={1}/>
          <Open due={1}/>
        </div>
      }
    </div>
  );
}

export default App;
