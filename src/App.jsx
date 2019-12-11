import React from 'react';
import logo from './logo.svg';
import './App.css';

//importing two "disconnected" components (not children or parents of each other.)
import Counter from './components/counter.jsx';
import Display from './components/display.jsx';

function App() {
  return (
    <div className="App">
      <Display />
      <Counter />
    </div>
  );
}

export default App;
