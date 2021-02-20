import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ hideProfile }) => {
  const [show, showHandler] = useState(false);

  const history = useHistory();

  // scroll handler func
  const showNavbar = () => {
    if (window.scrollY > 500) {
      showHandler(true);
    } else {
      showHandler(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavbar);

    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, []);

  return (
    <header className={`header ${show && "header__black"}`}>
      <div className="header__logo">
        <a href={!hideProfile ? "/" : "#"}>
          <img
            src={process.env.PUBLIC_URL + '/img/netflix.png'}
            alt="Logo"
          />
        </a>
      </div>
      <div className="header__contents">
        {!hideProfile ? (
          <img
            onClick={() => history.push("/profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
