import React, { useState } from 'react'; // Import useState correctly
import './App.css';
import Navbar from './Components/Menu/Dashboard/Navbar';

function App() {
  const [count, setCount] = useState(0); // Use correct variable naming


  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
    </>
  );
}

export default App;
