import "./Paginacion.css";
//Le pasamos destructuradas las props paginaSiguiente, paginaAnterior y paginación, es decir, las dos funciones para pasar de página y la variable que guarda la página en la que nos encontramos. Le asignamos las funciones a los botones
const Paginacion = ({ paginaAnterior, paginaSiguiente, paginacion }) => {
  return (
    <div className="botones">
      {paginacion > 1 ? (
        <button onClick={paginaAnterior} className="boton">
          Anterior
        </button>
      ) : (
        ""
      )}

      <p className="parrafo">{paginacion}</p>

      <button onClick={paginaSiguiente} className="boton">
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
