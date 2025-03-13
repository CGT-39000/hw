import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Dropdowns = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      {lang == "eng" ? (
        <div className="infowrapper">
          <details>
            <summary>What is Netflix?</summary>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want – all for one low monthly price.
              There's always something new to discover and new TV shows and
              movies are added every week!
            </p>
          </details>
          <details>
            <summary>How Much DoesNetflix Cost?</summary>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              $7.99 to $24.99 a month (pre-tax). No extra costs, no contracts.
            </p>
          </details>
          <details>
            <summary>Where can I watch?</summary>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS or Android app. Use downloads to watch
              while you're on the go and without an internet connection. Take
              Netflix with you anywhere.
            </p>
          </details>
          <details>
            <summary>How do I cancel?</summary>
            <p>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </details>
          <details>
            <summary>What can I watch on Netflix?</summary>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </details>
          <details>
            <summary>Is Netflix good for kids?</summary>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </details>
        </div>
      ) : (
        <div className="infowrapper">
          <details>
            <summary>¿Qué es Netflix?</summary>
            <p>
              Netflix es un servicio de streaming que ofrece una gran variedad
              de películas, series y documentales premiados en casi cualquier
              pantalla conectada a internet.
            </p>
          </details>
          <details>
            <summary>¿Cuánto cuesta Netflix?</summary>
            <p>
              Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o
              dispositivo de streaming, todo por una tarifa plana mensual.
              Planes desde $7.99 hasta $24.99 al mes (sin impuestos incluidos).
              Sin costos adicionales ni contratos.
            </p>
          </details>
          <details>
            <summary>¿Dónde puedo ver Netflix?</summary>
            <p>
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta
              de Netflix para ver contenido al instante a través de netflix.com
              desde tu computadora personal o en cualquier dispositivo con
              conexión a internet que cuente con la app de Netflix, como
              smart TV, smartphones, tablets, reproductores multimedia y
              consolas de juegos.
            </p>
          </details>
          <details>
            <summary>¿Cómo cancelo?</summary>
            <p>
              Netflix es flexible. Sin contratos molestos ni compromisos.
              Cancela la membresía online con solo dos clics. No hay cargos por
              cancelación. Empieza y termina cuando quieras.
            </p>
          </details>
          <details>
            <summary>¿Qué puedo ver en Netflix?</summary>
            <p>
              Netflix tiene un amplio catálogo de películas, series,
              documentales, animes, originales premiados y más. Todo lo que
              quieras ver, cuando quieras.
            </p>
          </details>
          <details>
            <summary>¿Es bueno Netflix para los niños?</summary>
            <p>
              La experiencia de Netflix para niños está incluida en la membresía
              para que los padres tengan el control mientras los peques
              disfrutan series y películas familiares en su propio espacio. Los
              perfiles para niños incluyen controles parentales protegidos por
              PIN que te permiten restringir el contenido que pueden ver los
              niños en función de la clasificación por edad y bloquear
              determinados títulos que no quieras que los niños vean.
            </p>
          </details>
        </div>
      )}
      ;
    </>
  );
};

export default Dropdowns;
