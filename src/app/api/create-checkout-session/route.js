import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
 
    try {
        const session = await stripe.checkout.sessions.create(
            {
              line_items: [
                {
                  price_data: {
                    currency: 'usd',
                    product_data: {
                      name: 'T-shirt',
                    },
                    unit_amount: 1000,
                  },
                  quantity: 1,
                },
              ],
              payment_intent_data: {
                application_fee_amount: 123,
              },
              mode: 'payment',
              success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
            },
            {
              stripeAccount: '{{CONNECTED_ACCOUNT_ID}}',
            }
          );

      return NextResponse.json({
        client_secret: accountSession.client_secret,
      })
      
    } catch (error) {
        
      console.error(
        "An error occurred when calling the Stripe API to create a checkout session",
        error
      );

      return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
      );
    }
  
}