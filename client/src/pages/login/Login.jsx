import { useContext, useRef, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix ? <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you' re not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Register;
