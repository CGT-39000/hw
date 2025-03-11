import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="filter"></div>
      <div className="filter2"></div>
      <img
        className="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/US-en-20250217-TRIFECTA-perspective_fc7ae276-709f-4b60-afc6-4d6ececed8fd_large.jpg"
      ></img>
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
