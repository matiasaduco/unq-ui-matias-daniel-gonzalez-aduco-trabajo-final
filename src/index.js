import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import VersusIA from './VersusIA';
import background from './Images/background.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${background})`, height:'100vh', width:'100vw'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='versus_ia' element={<VersusIA />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
