import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Navbar = () => {
  const location = useLocation();

  const { lang, toggleLang } = useContext(LangContext);

  return (
    <>
      <img
        className="logo"
        src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png"
      ></img>
      {location.pathname == "/login" || (
        <Link
          to="/login"
          className="link"
          style={{ textAlign: "center", display: "block" }}
        >
          {lang == "eng" ? "login" : "Iniciar sesión" }
        </Link>
      )}
      {location.pathname == "/" || (
        <Link
          to="/"
          className="link"
          style={{ textAlign: "center", display: "block" }}
        >
          Home
        </Link>
      )}
      <button className="link" onClick={toggleLang}>
        {lang === "eng" ? "Spanish" : "English"}
      </button>
    </>
  );
};

export default Navbar;
