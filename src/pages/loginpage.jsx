import Navbar from "../components/navbar";
import BottomLinks from "../components/BottomLinks";

const LoginPage = () => {
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
        <form className="loginform">
          <h1>Sign In</h1>
          <input className="email" type="email" placeholder="Email adress" />
          <br />
		  <br></br>
          <input className="email" type="password" placeholder="Password" />
          <br />
		  <br></br>
          <button className="getstarted">Sign In</button>
		  
        </form>
      </center>
      <BottomLinks></BottomLinks>
    </>
  );
};

export default LoginPage;
