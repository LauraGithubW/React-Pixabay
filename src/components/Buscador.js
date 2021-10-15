import { useState, useEffect } from "react";
import Resultado from "./Resultado";
import "./Buscador.css";
import Paginacion from "./Paginacion";
import Loader from "./Loader";

const Buscador = () => {
  //Creamos las variables de estado necesarias
  //En query se guarda lo que el usuario escriba en el input de tipo texto
  const [query, setQuery] = useState("");
  //En imágenes se guarda la respuesta de las peticiones fetch en json de las imágenes las cuales luego recorreremos para mostrarlas
  const [imagenes, setImagenes] = useState([]);
  //Aquí se inicializa mostrar a false para que solo se muestren en la ventana del navegador cuando esté a true
  const [mostrar, setMostrar] = useState(false);
  //Aquí guardamos el nº de página en la que nos encontramos
  const [paginacion, setPaginacion] = useState(1);
  //Aquí guardamos la url de la petición fetch
  const [url, setUrl] = useState("");
  //Aquí el icono de loading
  const [loader, setLoader] = useState(false);
  //En la función handleChange hacemos que guarde en query lo que escriba el usuario en el input, que mostrar siga a false y que el loader no se muestre
  const handleChange = (e) => {
    setQuery(e.target.value);
    setMostrar(false);
    setLoader(false);
    console.log(query);
  };
  //Aquí hacemos la petición fetch y le decimos que se ejecute siempre que  cambie la variable de estado query

  useEffect(() => {
    let pagina = paginacion;
    let url = `https://pixabay.com/api/?key=23807617-508d92312441cfcf6c7991bd4&q=${query}&per_page=20&page=${paginacion}
`;

    setUrl(url);

    console.log(pagina);
    if (query.length === 1) return null;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let imagen = json.hits;

        setImagenes(imagen);
      });
  }, [query]);
  //Aquí hacemos la petición fetch y le decimos que se ejecute siempre que  cambie la variable de estado paginación
  useEffect(() => {
    let pagina = paginacion;
    let url = `https://pixabay.com/api/?key=23807617-508d92312441cfcf6c7991bd4&q=${query}&per_page=20&page=${paginacion}
`;
    //Que en la vble url se guarde la url del fetch

    setUrl(url);

    // console.log(pagina);
    if (query.length === 1) return null;
    setLoader(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let imagen = json.hits;

        setImagenes(imagen);
        setLoader(false);
      });
  }, [paginacion]);

  //console.log(imagenes);
  console.log(url);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      alert("Busca una imagen válida");
    }
    setMostrar(true);
  };

  //Funciones de la paginación para ir atrás y alante
  const paginaAnterior = () => {
    if (paginacion <= 1) return;
    let pagina = paginacion;
    pagina -= 1;
    setPaginacion(pagina);
    console.log(paginacion);
  };
  const paginaSiguiente = () => {
    let pagina = paginacion;
    pagina += 1;
    setPaginacion(pagina);
    console.log(paginacion);
  };
  //Aquí está el formulario , le añadimos handleSubmit al botón de envío y handleChange al input
  return (
    <div className="formulario">
      <form className="form" name="form" onSubmit={handleSubmit}>
        <input
          className="text"
          type="text"
          name="imagen"
          onChange={handleChange}
          placeholder="Busca tu imagen...Ej:Tenis"
          autoComplete="off"
        />
        <input type="submit" className="submit" value="Enviar" />
      </form>
      <div className="buscador">
        {loader && <Loader />}
        {mostrar &&
          imagenes.map((imagen) => (
            <Resultado imagenes={imagen} key={imagen.id} />
          ))}
      </div>
      {mostrar && (
        <Paginacion
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          paginacion={paginacion}
        />
      )}
    </div>
  );
};

export default Buscador;
