import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  console.log("PATH: " + location.pathname);


  return (
    <>
      <img
        className="logo"
        src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png"
      ></img>
      { location.pathname == "/login" || <Link to="/login" className="link" style={{ textAlign: "center", display: "block" }}>Login</Link>}
      { location.pathname == "/" || <Link to="/" className="link" style={{ textAlign: "center", display: "block" }}>Home</Link>}
    </>
  );
};

export default Navbar;
