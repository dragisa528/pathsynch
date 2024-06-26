import Response from "../../utils/response.js";
import { purchase_state_Hook_Lookup } from "../../models/campaigns/get.js";
import stripe from "stripe";

const Stripe = new stripe(process.env.STRIPE_SECRETE_KEY);

const response = (message) => new Response(message);

export async function purchase_state(rq, rs, pass) {
  const { transactionId } = await rq.params;
  try {
    const lookup = await purchase_state_Hook_Lookup(transactionId);

    let state;

    if (lookup !== null) {
      state = true;
    } else {
      state = false;
    }

    rs.status(200).json(
      response("ok").success({ from: "ps", watch: "sales", state })
    );
  } catch (err) {
    pass(err);
  }
}

export async function create_payment_intent(rq, rs, pass) {
  // const StripeSDK = new stripe(process.env.STRIPE_SECRETE_KEY_LIVE);
  const { type } = rq.body;

  let price = 0;
  if (type === "NNIK29") {
    price = 5000;
  } else if (type === "930FF02") {
    price = 10000;
  } else if (type === "SO994SK") {
    price = 20000;
  }

  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: price,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      // application_fee_amount: 1000,
      // transfer_data: {
      //   destination: "acct_1OjyCREQ4JdSKu3k",
      // },
    });

    rs.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return rs.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
}
// purchase state [hook]
