import "./Resultado.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

//Este componente lo creamos para crear la estructura de las tarjetas de las imágenes  con los elementos de la respuesta de la petición fetch para que se muestre la imagen la url, etc destructurando sus propiedades. Además añadimos iconos de Fontawesome
const Resultado = ({ imagenes }) => {
  const { largeImageURL, tags, views, likes } = imagenes;
  return (
    <div className="cards">
      <div className="card">
        <img className="image" src={largeImageURL} alt={tags} />
        <p className="phrases">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#cfc" }} />
          &nbsp; Views: {views}.
        </p>

        <p className="phrases">
          <FontAwesomeIcon icon={faEye} style={{ color: "#cfc" }} />
          &nbsp; Likes: {likes}.
        </p>
        <a
          className="showImage"
          href={largeImageURL}
          target="_blank"
          rel="noreferrer"
        >
          Ver imagen
        </a>
      </div>
    </div>
  );
};

export default Resultado;
