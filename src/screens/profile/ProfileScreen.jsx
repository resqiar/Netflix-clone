import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { auth } from "../../config/Firebase";
import { selectUser } from "../../features/userSlice";
import "./ProfileScreen.css";

const ProfileScreen = () => {
    const user = useSelector(selectUser)

  return (
    <div className="profile">
      <Header />

      <div className="profile__container">
        <div className="container-content">
          <h2>Edit Profile</h2>

          <div className="content">
            <div className="container-content-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
              />
            </div>
            <div className="container-content-subscribe">
              <div className="email">
                <p>{user?.email}</p>
              </div>
              <div className="plan">
                <p>Plans (Current Plan:Premium)</p>
              </div>
              <div className="renewal">
                <p>Renewal date: 04/12/2021</p>
              </div>
              <div className="subscribe-plans"></div>
              <div className="sign-out">
                <Link to="/">
                <button type="submit" onClick={() => auth.signOut()}>Sign Out</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
