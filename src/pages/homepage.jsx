import Navbar from "../components/navbar";
import Background from "../components/background";
import Dropdowns from "../components/dropdowns";
import BottomLinks from "../components/BottomLinks";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const HomePage = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      {lang == "eng" ? (
        <>
          <center className="info-center">
            <h1>
              Unlimited movies, TV
              <br /> shows, and more
            </h1>
            <h3>Starts at $7.99. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <input className="email" type="email" placeholder="Email adress" />
            <button className="getstarted">Get Started &gt;</button>
          </center>
          <div className="rainbow"></div>
          <div className="flexcontainer">
            <Dropdowns></Dropdowns>
          </div>
          <div className="infowrapper">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <input className="email2" type="email" placeholder="Email adress" />
            <button className="getstarted">Get Started &gt;</button>
          </div>
          <p className="phone">Questions? Call 1-844-505-2993</p>
        </>
      ) : (
        <>
          <center className="info-center">
            <h1>
              Películas y series ilimitadas
              <br /> y mucho más
            </h1>
            <h3>A partir de $7.99. Cancela cuando quieras.</h3>
            <h4>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </h4>
            <input className="email" type="email" placeholder="Email" />
            <button className="getstarted">Comenzar &gt;</button>
          </center>
          <div className="rainbow"></div>
          <div className="flexcontainer">
            <Dropdowns></Dropdowns>
          </div>
          <div className="infowrapper">
            <p>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </p>
            <input className="email2" type="email" placeholder="Email" />
            <button className="getstarted">Comenzar &gt;</button>
          </div>
          <p className="phone">¿Preguntas? Llama al 1-844-505-2993</p>
        </>
      )}
      ;<BottomLinks></BottomLinks>
    </>
  );
};

export default HomePage;
