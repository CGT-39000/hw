import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const LoginForm = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <center className="info-center">
        <form className="loginform">
          <h1>{lang == "eng" ? "Sign In" : "Iniciar sesión" }</h1>
          <input className="email" type="email" placeholder="Email" />
          <br />
          <br></br>
          <input className="email" type="password" placeholder={lang == "eng" ? "Password" : "Contraseña" } />
          <br />
          <br></br>
          <button className="getstarted">{lang == "eng" ? "Sign In" : "Iniciar sesión" }</button>
        </form>
      </center>
    </>
  );
};

export default LoginForm;
