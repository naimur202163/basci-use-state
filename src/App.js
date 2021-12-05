import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Sharmin')
  const handleButton = () => {
    setName('Sumi')
    console.log(name)
  }
  return (
    <div className="App">
      <h3>React use State Basic</h3>
      <h5>My Name is {name}</h5>
      <button onClick={handleButton}>Click me</button>
    </div>
  );
}

export default App;
