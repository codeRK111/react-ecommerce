import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_mwq7w61KP3t7temA5x0WrRV000kxFjwWPV";
    const onToken = token => {
        console.log(token);
        window.alert("Payment successful");
    };

    return (
        <StripeCheckout
            label="Pay now"
            panelLabel="Pay now"
            image="https://sendeyo.com/up/d/f3eb2117da"
            name="React e-commerce"
            billingAddress
            shippingAddress
            stripeKey={publishableKey}
            amount={priceForStripe}
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;
