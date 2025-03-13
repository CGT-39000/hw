import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const BottomLinks = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      {lang == "eng" ? (
        <div className="container">
          <div className="menu">
            <a href="#">FAQ</a>
            <br />
            <a href="#">Account</a>
            <br />
            <a href="#">Investor Relations</a>
            <br />
            <a href="#">Netflix Shop</a>
            <br />
            <a href="#">Buy Gift Cards</a>
          </div>
          <div className="menu">
            <a href="#">Terms Of Use</a>
            <br />
            <a href="#">Coockie Prefrences</a>
            <br />
            <a href="#">Contact Us</a>
            <br />
            <a href="#">Legal Notices</a>
            <br />
            <a href="#">Do Not Sell or Share My Personal Information</a>
          </div>
          <div className="menu">
            <a href="#">Help Center</a>
            <br />
            <a href="#">Media Center</a>
            <br />
            <a href="#">Jobs</a>
            <br />
            <a href="#">Redeem Gift Cards</a>
            <br />
            <a href="#">Ways to Watch</a>
          </div>
          <div className="menu">
            <a href="#">Privacy</a>
            <br />
            <a href="#">Corporate Information</a>
            <br />
            <a href="#">Speed Test</a>
            <br />
            <a href="#">Only on Netflix</a>
            <br />
            <a href="#">Ad Choices</a>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="menu">
            <a href="#">Preguntas frecuentes</a>
            <br />
            <a href="#">Centro de ayuda</a>
            <br />
            <a href="#">Cuenta</a>
            <br />
            <a href="#">Prensa</a>
            <br />
            <a href="#">Relaciones con inversionistas</a>
          </div>
          <div className="menu">
            <a href="#">Empleo</a>
            <br />
            <a href="#">Tienda de Netflix</a>
            <br />
            <a href="#">Canjear tarjetas de regalo</a>
            <br />
            <a href="#">Comprar tarjetas de regalo</a>
            <br />
            <a href="#">Formas de ver</a>
          </div>
          <div className="menu">
            <a href="#">Términos de uso</a>
            <br />
            <a href="#">Privacidad</a>
            <br />
            <a href="#">Preferencias de cookies</a>
            <br />
            <a href="#">RInformación corporativa</a>
            <br />
            <a href="#">Contáctanos</a>
          </div>
          <div className="menu">
            <a href="#">Prueba de velocidad</a>
            <br />
            <a href="#">Solo en Netflix</a>
            <br />
            <a href="#">Avisos legales</a>
            <br />
            <a href="#">No vender ni compartir mi información personal</a>
            <br />
            <a href="#">Opciones de anuncios</a>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomLinks;
