const LoginForm = () => {
  return (
    <>
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
    </>
  );
};

export default LoginForm;
