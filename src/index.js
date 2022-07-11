import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import background from './Images/background.png';
import Match from './Match';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${background})`, height:'100vh', width:'100vw'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='match' element={<Match />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
