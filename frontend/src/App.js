import { useState } from 'react';
import Nav from './components/Nav';
import { Nav2 } from './components/Nav';

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}

export default App;
