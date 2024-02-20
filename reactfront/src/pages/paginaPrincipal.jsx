import React from 'react';
import "../pages/paginaPrincipal.css"

function PaginaPrincipal() {
  return (
    <div className="contenedor">
      {/* Primera sección */}
      <div className="fila">       
          <hr />            
      </div>

      {/* Segunda sección */}
      <div className="row">
        <div className="col">
          <h1 className="display-4">welcome to the Singer Blog</h1>
          <div className='botones1'>
            <a className="btn btn-dark mr-2" href="/create">Crear Blog</a>
            <a className="btn btn-dark" href="/blogs">Mostrar Blog</a>
          </div>
        </div>
      </div>

      {/* Tercera sección */}
       
        <div className="row">
            <div className="col">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-50" src='images/michael.jpg' alt="Imagen 1" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-50" src="images/bonjovi.webp" alt="Imagen 2" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-50" src="images/take.webp" alt="Imagen 3" />
                </div>
                </div>
            <div className='seccion3'></div>
            </div>
            </div>
        </div>
        </div>
      
      
 );
}

export default PaginaPrincipal;


