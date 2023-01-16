import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './routes';


/* <div className="page">
       
*/

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}>
        <Route index element={<Register />} />
        </ Route>
    </Routes>
   </BrowserRouter>
    );
  }
  
  export default App;
  