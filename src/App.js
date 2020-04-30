import React from 'react';
import logo from './logo2.png';
import './App.css';
import ContactForm from './form.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Coming Soon!!
        </p>
      </header>
      <body>
        <ContactForm />
      </body>
    </div>
 );
}

export default App;
