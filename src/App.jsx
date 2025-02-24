import "./App.css";

function App() {
  return (
    <>
      <div className="filter"></div>
      <div className="filter2"></div>
      <img
        className="logo"
        src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png"
      ></img>
      <img
        className="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/US-en-20250217-TRIFECTA-perspective_fc7ae276-709f-4b60-afc6-4d6ececed8fd_large.jpg"
      ></img>
      <center className="info-center">
        <h1>Unlimited movies, TV<br/> shows, and more</h1>
        <h3>Starts at $7.99. Cancel anytime.</h3>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <input className="email" type="email" placeholder="Email adress" />
        <button className="getstarted">Get Started &gt;</button>
      </center>
    </>
  );
}

export default App;
