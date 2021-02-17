import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { auth } from "../../config/Firebase";
import { selectUser } from "../../features/userSlice";
import axios from "../../api/Server";
import { loadStripe } from "@stripe/stripe-js";

import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const stripe = loadStripe(
    "pk_test_51ILMr7BvQ7nVkNq4ABYFTHxbFRwH3GyUbgQ74IAWOF90ZuOBKpOxhDz4YPARNugSUrEg8JKYLron0CqauiIQRCMa00AGlOEEAZ"
  );

  const handleSubcription = async (prodId) => {
    try {
      // create a session to server
      const checkoutSession = await axios.post("/create-checkout-sessions", {
        priceId: prodId,
      });

      // after creating a checkout session
      // redirect user to Checkout Page
      const redirect = (await stripe).redirectToCheckout({
        sessionId: checkoutSession.data.sessionId,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

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
                <p>Plans (Current Plan:Godmode)</p>
              </div>
              <div className="renewal">
                <p>Renewal date: doomsday</p>
              </div>
              <div className="subscribe-plans">
                <div className="subscribe-plans-items disabled">
                  <p>Godmode Package</p>
                  <button className="subscribed">Subscribed</button>
                </div>

                <div className="subscribe-plans-items">
                  <p>Premium Package</p>
                  <button
                    onClick={() =>
                      handleSubcription("price_1ILjjlBvQ7nVkNq4QjlFqS0f")
                    }
                  >
                    Subscribe
                  </button>
                </div>

                <div className="subscribe-plans-items">
                  <p>Standard Package</p>
                  <button
                    onClick={() =>
                      handleSubcription("price_1ILjj5BvQ7nVkNq47o9uE2wO")
                    }
                  >
                    Subscribe
                  </button>
                </div>

                <div className="subscribe-plans-items">
                  <p>Basic Package</p>
                  <button
                    onClick={() =>
                      handleSubcription("price_1ILji6BvQ7nVkNq4HHrrvaWY")
                    }
                  >
                    Subscribe
                  </button>
                </div>

                <div className="subscribe-plans-items">
                  <p>Mobile Package</p>
                  <button
                    onClick={() =>
                      handleSubcription("price_1ILjgjBvQ7nVkNq4i2TPSsex")
                    }
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="sign-out">
                <Link to="/">
                  <button type="submit" onClick={() => auth.signOut()}>
                    Sign Out
                  </button>
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
