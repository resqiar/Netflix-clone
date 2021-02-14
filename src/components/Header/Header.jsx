import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [show, showHandler] = useState(false);

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
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Logo"
        />
      </div>
      <div className="header__contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
