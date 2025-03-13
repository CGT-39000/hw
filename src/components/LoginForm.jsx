import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { useState } from "react";

const LoginForm = () => {
  const { lang } = useContext(LangContext);

  const [valid, setValid] = useState(true);

  const validateEmail = (e) => {
    console.log("ran");
    if (isValidEmail(e.target.value)) {
      setValid(false);
    }
    else {
      setValid(true);
    }
  };

  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <>
      <center className="info-center">
        <form className="loginform">
          <h1>{lang == "eng" ? "Sign In" : "Iniciar sesión" }</h1>
          <input className="email" type="email" onChange={validateEmail} placeholder="Email" />
          <br />
          <br></br>
          <input className="email" type="password" placeholder={lang == "eng" ? "Password" : "Contraseña" } />
          <br />
          <br></br>
          <button disabled={valid} className="getstarted">{lang == "eng" ? "Sign In" : "Iniciar sesión" }</button>
        </form>
      </center>
    </>
  );
};

export default LoginForm;
