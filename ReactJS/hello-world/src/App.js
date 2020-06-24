import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Ross" love="Dinasorus/Rachel">
        <p>
          This is children props
        </p>
      </Greet>
      <Greet name="Chandler" love="Sarcasm/Monica">
        <button>Action</button>
      </Greet>
      <Greet name="Joey" love="Flirt/Food" />

      <Welcome name="Ross" love="Dinasorus/Rachel"/>
      <Welcome name="Chandler" love="Sarcasm/Monica"/>
      <Welcome name="Joey" love="Flirt/Food"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
