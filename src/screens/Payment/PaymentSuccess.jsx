import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../api/Server";
import Header from "../../components/Header/Header";
import { selectUser } from "../../features/userSlice";

import "./PaymentSuccess.css";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Spinner from "react-spinner-material";

const PaymentSuccess = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);

  const handleSuccess = async () => {
    setLoading(true);
    // get session id from database
    // although this can get from URL, the docs suggest to
    // get 'em from the database, so this is more efficient and safe
    const session = await axios.post("/get-session-id", {
      customerEmail: user.email,
    });

    setLoading(false)
    window.location.href = session.data.url;
  };

  return (
    <div className="payment__success">
      <Header hideProfile />

      <div className="payment__success__container">
        <div className="payment-success-content">
          <div className="payment-success-congrats">
            <CheckCircleOutlineIcon />
            <h2>Congratulations !</h2>
          </div>
          <div className="payment-success-text">
          Congratulations! your payment was confirmed & secured. Please confirm by clicking the confirmation button below.
            You will be redirected to the customer portal page, we provide your payment details there. Hurray!
          </div>
          <div className="payment-success-button">
            <button onClick={handleSuccess}>
              {!loading ? (
                <>CONFIRM</>
              ) : (
                <>
                  <div className="loading">
                    <Spinner radius={20} color={"#fff"} stroke={2} />
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
