import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout"
const KEY = "pk_test_51Khpe3SAQNI0xraJYV8iEJNPU71UeHlAsTUGAU9wozHAJ1K9yacxfhZ6q2d8aWxeDirr2AoZeyGW2reyyBiZqeDH00l44CSLVU"
const Pay = () => {
    const onToken = (token) => {
        setStripeToken(token)
    }
    const [stripeToken, setStripeToken] = useState(null);
const history = useHistory();
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("https://flipzon-be.herokuapp.com/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                });
                console.log(res.data);
                history.push("/success")
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {stripeToken ? (<span>Processing .. Please Wait </span>) : (

                <StripeCheckout
                    name="FlipZon"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-JA8SRxE3OgvEsNQ2iM3-h1tTyjpOppIa6FN9N0E8xHDCJpo1Yeg1QYmlfNXk7nMul4&usqp=CAU"
                    billingAddress
                    shippingAddress
                    description="Your Total is Rs.20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                            height: "10vh"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}



        </div>
    )
}

export default Pay;
