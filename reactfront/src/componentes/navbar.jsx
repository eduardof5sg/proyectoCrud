import React from 'react';
import { Link } from 'react-router-dom'; 

function BarraNavegacion() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link font-weight-bold text-dark" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font-weight-bold text-dark" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font-weight-bold text-dark" to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;


