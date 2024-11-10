import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
    try {
      const account = await stripe.accounts.create({
        
      });

      return NextResponse.json({account: account.id});

    } catch (error) {
      console.error('An error occurred when calling the Stripe API to create an account:', error);

      return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
      );
    }
  
}