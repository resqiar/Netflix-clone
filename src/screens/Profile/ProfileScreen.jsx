import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { auth } from "../../config/Firebase";
import { selectUser } from "../../features/userSlice";
import axios from "../../api/Server";
import { loadStripe } from "@stripe/stripe-js";

import "./ProfileScreen.css";
import Spinner from "react-spinner-material";
import UT from 'unixtimejs'

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState([]);
  
  // stripe publishable key
  const stripe = loadStripe(
    "pk_test_51ILMr7BvQ7nVkNq4ABYFTHxbFRwH3GyUbgQ74IAWOF90ZuOBKpOxhDz4YPARNugSUrEg8JKYLron0CqauiIQRCMa00AGlOEEAZ"
  );

  const handleSubcription = async (prodId) => {
    try {
      // show loading
      setLoading(true);

      // create a session to server
      const checkoutSession = await axios.post("/create-checkout-sessions", {
        priceId: prodId,
        customerEmail: user.email,
      });

      // after creating a checkout session
      // redirect user to Checkout Page
      setLoading(false);
      const redirect = (await stripe).redirectToCheckout({
        sessionId: checkoutSession.data.sessionId,
      });
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  useEffect(() => {
    const getSubscription = async () => {
      const request = await axios.post("/get-user-subscription-detail", {
        customerEmail: user.email,
      });

      // set user subscription details
      setDetail(request.data);
    };

    const fetchProducts = async () => {
      const request = await axios.get("/get-products");

      // set all available products/packages/plans
      setProducts(request.data);
    };

    fetchProducts();
    getSubscription();
    return;
  }, []);

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
                <p>Plan (Current plan:{detail?.subscription?.details.name ? detail?.subscription?.details.name : " -"})</p>
              </div>
              <div className="renewal">
                <p>Renewal date: {detail?.subscription?.end ? UT.toUTCString(detail?.subscription?.end) : '-'}</p>
              </div>
              <div className="subscribe-plans">
                {products.map((prod) => (
                  <div
                    className={`subscribe-plans-items ${detail?.subscription?.plan === prod?.priceId && "disabled"
                      }`} key={prod?._id}
                  >
                    <div className="subscribe-plans-items-text">
                      <p>{prod?.name}</p>
                      <p className="subtitle">{prod?.desc}</p>
                    </div>
                    <button
                      onClick={() =>
                        detail?.subscription?.plan !== prod?.priceId &&
                        handleSubcription(prod?.priceId)
                      }
                    >
                      {detail?.subscription?.plan === prod?.priceId
                        ? "Current Plan"
                        : "Subscribe"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="sign-out">
                <Link to="/">
                  <button type="submit" onClick={() => auth.signOut()}>
                    {!loading ? (
                      <>Log Out</>
                    ) : (
                        <>
                          <div className="loading">
                            <Spinner radius={20} color={"#fff"} stroke={2} />
                          </div>
                        </>
                      )}
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
