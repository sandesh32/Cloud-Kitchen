import { Link } from "react-router-dom";

const LoginPageComponent = () => {
  return (
    <div className="loginbody">
        <div className="loginpage">
      <div className="loginsec">
        <p>GhostEats</p>
        <div className="loginform">
          <h1>
            Login
          </h1>
          <form action="#">
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" value="Login" />
          </form>
          <div className="loginlinks">
            <p>Not Registered? <Link to={"#"}>Register</Link></p>
            <div className="horizontalline"></div>
            <p><Link to={"#"}>I am a Kitchen Employee</Link></p>
            <p><Link to={"#"}>I am a Delivery Personnel</Link></p>
          </div>
        </div>
      </div>
      <div className="loginphoto">
        <img src="images/LoginBurger.png" alt="LoginBurger" />
      </div>
    </div>
    </div>
    
  );
};

export default LoginPageComponent;
