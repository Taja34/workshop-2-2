import React from 'react';
import './App.css';
import Builder from './components/Builder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Receipt from './components/Receipt/index';




function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Builder/>} />
        <Route  path="/receipt" element={<Receipt/>} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default App;
