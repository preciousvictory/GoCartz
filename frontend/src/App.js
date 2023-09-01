import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Nav />
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}

export default App;
