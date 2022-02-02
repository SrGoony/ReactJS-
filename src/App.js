import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula'
import PageWraper from './paseWraper'
import pelisJSON from './pelisJSON.json'
import Paginacion from './paginacion';

function App() {

  let peliculas = pelisJSON



  return (  
    <>
    <PageWraper>

      {peliculas.map( (peli) => {
        return ( <Pelicula pelicula={peli.titulo} calificacion={peli.calificacion} director={peli.director} actores={peli.actores} fecha={peli.fecha} duracion={peli.duracion} img={peli.img}> {peli.descripcion}</Pelicula>)
      })}

      <Paginacion></Paginacion>


    </PageWraper>
    </>

  );
}

export default App;
