import React from 'react';
import './App.css';

function App() {
  let a = 5
  return (
    <div className="App">


      {/* ----------- Ders 8 start ----------- */}
      {/* JSX bəzi ifadələr HTMl kimi deyil Bu cur duz deyil class => className olaraq istifade olunmalidir*/}
      {/* <h1 class="header">Head</h1> */}
      {/*----------- Ders 8 end -----------*/}



      {/* --------------------------------------------------------------- */}



      {/* ----------- Ders 9 start ----------- */}
      {/* JSX ifadələri  (JSX html icinde JS yazmaq) */}
      <h1 className="header">{1 + 1}</h1>
      <h4>{"elmar".toUpperCase()}</h4>
      {a % 2 === 0 ? <h1>Cutdur</h1> : <h1>Tekdir</h1>}
      {/*----------- Ders 9 end -----------*/}



      {/* --------------------------------------------------------------- */}


    </div>
  );
}

export default App;
