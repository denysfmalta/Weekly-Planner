import React from 'react';
import image from './assets/image 2.png';
import logo from './assets/compass-logo.png';
import './App.css';


function App() {
  return (
    <div className="page">
       
      <div className="text-container">
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>
      </div>
       <div className="image-container">
        <img src={image} className="image" alt="neon-notebook" />
       </div>
    </div>
    );
  }
  
  export default App;
  