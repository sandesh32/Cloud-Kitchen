import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="registerpage">
      <div className="loginpage">
        <div className="loginsec">
          <p>GhostEats</p>
          <div className="loginform">
            <h1>Register</h1>
            <form action="#">
              <input type="text" placeholder="Full Name" name="fullname"/>
              <input type="tel" id="phonenumber" placeholder="Phone Number" name="phonenumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
              <input type="email" placeholder="Email" name="email"/>
              <input type="password" placeholder="Password" name="password"/>
              <input type="password" placeholder="Confirm Password" name="confirmpassword"/>
              {/* <input type="password" placeholder="Confirm Password" name="confirmpassword"/> */}
              <input type="submit" value="Register" />
            </form>
            <div className="loginlinks">
              {/* <div className="horizontalline"></div> */}
              <p>
                Already Registered? <Link to={"/logincustomer"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="loginphoto">
          <img src="images/registerFood.jpg" alt="LoginBurger" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
