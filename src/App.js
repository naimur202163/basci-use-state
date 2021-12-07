import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './coponents/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { name: 'Naimur Rahman', id: 1 },
    { name: "React js", id: 2 },
    { name: "Node js", id: 3 }, {
      name: "mongodb", id: 4
    }
  ]);

  console.log(showEvents)
  const handleButton = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      <Title />
      <h3>React use State Basic</h3>
      {showEvents && (<div><button onClick={() => setShowEvents(false)}>Hide items</button></div>)}
      {!showEvents && <div div > <button onClick={() => setShowEvents(true)}>Show</button></div>}

      {
        showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2 >{index} - {event.name}</h2>
            <button onClick={() => { handleButton(event.id) }}>Click me</button>
          </div>
        ))
      }
    </div >
  );
}

export default App;
