import React, { useRef, useState } from "react";
import { auth } from "../../config/Firebase";
import Spinner from "react-spinner-material";
import "./AuthComponent.css";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const AuthComponent = () => {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const labelEmailRef = useRef(null);
  const labelPassRef = useRef(null);
  const errorRef = useRef(null);
  const errorTextRef = useRef(null);

  const checkValidity = () => {
    labelEmailRef.current.style = "display:none";
    labelPassRef.current.style = "display:none";
    errorRef.current.style = "display:none";

    // TODO: EMAIL AND PASSWORD VALIDATION
    if (!emailRef.current.value) {
      labelEmailRef.current.style = "display:flex";
      throw new Error();
    } else if (
      !emailRef.current.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      labelEmailRef.current.style = "display:flex";
      throw new Error();
    } else if (!passwordRef.current.value) {
      labelPassRef.current.style = "display:flex";
      throw new Error();
    } else if (passwordRef.current.value.length < 4) {
      labelPassRef.current.style = "display:flex";
      throw new Error();
    } else {
      labelEmailRef.current.style = "display:none";
      labelPassRef.current.style = "display:none";
    }
  };

  const register = (e) => {
    e.preventDefault();

    // TODO: VALIDATE EMAIL AND PASSWORD
    try {
      checkValidity();
    } catch (e) {
      return;
    }

    // TODO: EMAIL AND PASSWORD VALID!!!
    setLoading(true);

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        // Signed Up User
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        errorRef.current.style = "display:flex";
        errorTextRef.current.innerHTML = e.message;
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    // TODO: VALIDATE EMAIL AND PASSWORD
    try {
      checkValidity();
    } catch (e) {
      return;
    }

    // TODO: EMAIL AND PASSWORD VALID!!!
    setLoading(true);

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        errorRef.current.style = "display:flex";
        errorTextRef.current.innerHTML = e.message;
      });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth-header">Sign in</h2>
        <div className="auth-form">
          <form>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required={true}
            />
            <label htmlFor="email" ref={labelEmailRef}>
              Please enter a valid email
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
            />
            <label htmlFor="password" ref={labelPassRef}>
              Your password must contain between 4 and 60 characters.
            </label>
            <div className="error-message" ref={errorRef}>
              <ErrorOutlineIcon /> <span ref={errorTextRef}></span>
            </div>
            <button onClick={signIn}>
              {!loading ? (
                <>Sign In</>
              ) : (
                <>
                  <div className="loading">
                    <Spinner radius={20} color={"#fff"} stroke={2} />
                  </div>
                </>
              )}
            </button>
          </form>
        </div>
        <div className="sign-up">
          New to Netflix?{" "}
          <span>
            <a onClick={register}>Sign up now.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
