import Navbar from "../components/navbar";
import Background from "../components/background";
import Dropdowns from "../components/dropdowns";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      <center className="info-center">
        <h1>
          Unlimited movies, TV
          <br /> shows, and more
        </h1>
        <h3>Starts at $7.99. Cancel anytime.</h3>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
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
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input className="email2" type="email" placeholder="Email adress" />
        <button className="getstarted">Get Started &gt;</button>
      </div>
      <p className="phone">Questions? Call 1-844-505-2993</p>
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
    </>
  );
};

export default HomePage;
