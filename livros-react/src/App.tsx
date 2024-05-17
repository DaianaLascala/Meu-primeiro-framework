import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

import './App.css';

function App() {
  return (
    <BrowserRouter>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Livros</Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link">Dados</Link>
            </li>
          </ul>
        </div>
      </nav>

        <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;