import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Ross" love="Dinasorus/Rachel">
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
      <Welcome name="Joey" love="Flirt/Food"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
