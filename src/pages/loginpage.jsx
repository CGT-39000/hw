import Navbar from "../components/navbar";
import BottomLinks from "../components/BottomLinks";
import LoginForm from "../components/LoginForm";
import Background from "../components/background";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const LoginPage = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      <LoginForm></LoginForm>
      <div className="infowrapper2"></div>
      <p className="phone">{lang == "eng" ? "Questions? Call 1-844-505-2993" : "Iniciar sesión" }</p>
      <BottomLinks></BottomLinks>
    </>
  );
};

export default LoginPage;
