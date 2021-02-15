import React, { useState } from "react";
import "./HeroUnauth.css";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AuthComponent from "../AuthComponent/AuthComponent";

const HeroUnauth = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div
      className="hero__unauth"
      style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/7bbebcca-cbac-424f-9803-6d10db769c9e/ID-en-20210208-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
      }}
    >
      <div className="hero__unauthHeader">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
          alt="netflix"
          className="unauth-logo"
        />
        <button className="hero-unauth-button" onClick={() => setAuth(true)}>
          Sign In
        </button>
      </div>

      <div className="hero__unauthEffect"></div>

      {!auth ? (
        <>
          <div className="hero__unauthContent">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>

            <div className="get-started">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="email-form">
                <input type="email" name="" id="" placeholder="Email address" />
                <button onClick={() => setAuth(true)}>
                  Get Started <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <AuthComponent />
      )}
    </div>
  );
};

export default HeroUnauth;
