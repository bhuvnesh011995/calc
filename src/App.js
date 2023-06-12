import { useState } from 'react';
import './App.css';
import Container from './containar/Container';


function App() {
  let [a,setA] = useState("");
  let [b,setB] = useState("");
  return (
    <div className="app">
      <Container a={a} b={b} setA={setA} setB={setB}  />
      
    </div>
  );
}

export default App;
