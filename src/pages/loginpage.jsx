import Navbar from "../components/navbar";
import BottomLinks from "../components/BottomLinks";
import LoginForm from "../components/LoginForm";
import Background from "../components/background";

const LoginPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      <LoginForm></LoginForm>
      <BottomLinks></BottomLinks>
    </>
  );
};

export default LoginPage;
