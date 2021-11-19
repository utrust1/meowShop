import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { AiOutlineExclamation } from "react-icons/ai";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000000",
      color: "#000000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "26px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000000" },
      "::placeholder": { color: "#000000" },
    },
    invalid: {
      iconColor: "#000000",
      color: "#000000",
    },
  },
};
export const StripeForm = ({ total,setCartNumber }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const [errmessage, setErrmessage] = useState("");
  const elements = useElements();
  const user_id = localStorage.getItem("CurrentUserId");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  // const state2 = useSelector((state) => {
  //   return { amount: state.amount.amount };
  // });
  // const state3 = useSelector((state) => {
  //   return { postId: state.postId.postId };
  // });
  // const state1 = useSelector((state) => {
  //   return { title: state.title.title };
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const d = new Date().toISOString().substr(0, 19).replace("T", " ");
        // const date = `${d.getFullYear()}-${d.getMonth() + 2}-${d.getDate()}`
        // console.log(date,"date date")
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/purchase", {
          id,
          amount: total * 100,
          address,
          city,
          phoneNumber,
          country,
        });
        if (response.data.success) {
          console.log("succ payment", response.data.success);
          setSuccess(true);
          setCartNumber(0)
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      if (error.code == "incomplete_number") {
        console.log("Erro", error);
        setErrmessage("Your card number is incorrect");
      }
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          {/** */}
          <Container className="main-Error">
            {errmessage && errmessage.length > 0
              ? ["danger"].map((variant, idx) => (
                  <Alert key={idx} variant={variant} className="Alert-login">
                    <AiOutlineExclamation className="Error-Login" />{" "}
                    {errmessage}
                  </Alert>
                ))
              : ""}
          </Container>
          {/** */}
          <input
            type="text"
            placeholder=" Your Country "
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder=" Your City "
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder=" Your Address "
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
          <input
            type="number"
            placeholder=" Your Phone number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></input>
          <div>Your Total Amout is : ${total}</div>
          <button type="submit" className="donate">
            Pay Now :)
          </button>
        </form>
      ) : (
        <div>
          <h2 className="donate-done">Thank You For Your Donation</h2>
        </div>
      )}
    </>
  );
};
