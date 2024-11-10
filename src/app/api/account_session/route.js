import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
    const {account} = await req.json();
    console.log("OBLAAAA")
    console.log(account)
    try {
      const accountSession = await stripe.accountSessions.create({
        account: account,
        components: {
          account_onboarding: { enabled: true },
        }
      });

      return NextResponse.json({
        client_secret: accountSession.client_secret,
      })
      
    } catch (error) {
        
      console.error(
        "An error occurred when calling the Stripe API to create an account session",
        error
      );

      return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
      );
    }
  
}