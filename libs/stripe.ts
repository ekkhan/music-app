import Stripe from "stripe";
//stripe is a class, need to instantiate so all reqs are authenticated
export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        apiVersion: "2022-11-15" as any,
        appInfo: {
            name: 'Spotify Clone Video',
            version: '0.1.0'
        }
    }
);