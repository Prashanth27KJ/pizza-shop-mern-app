import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LZXW3SEaUpzn2zOWpaUDbJu925v1xHhc2KQXLEiSijA5bvMAcF34A2htRBYCCpj0vEkJccCsXl76HT4tfiP6XwB00oqpYMHYU"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
