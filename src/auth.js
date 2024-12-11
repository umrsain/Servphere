import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db"
//import { db, accounts, sessions, users, verificationTokens } from "./schema"
 
export const { handlers, auth, signIn, signOut  } = NextAuth({
 
  providers: [Google],
  adapter: DrizzleAdapter(db),
  callbacks : {

  }
})