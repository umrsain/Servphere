import NextAuth, { AuthError, CredentialsSignin } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcryptjs';
import { User } from '../models/userModel';
import { connectDB } from './utils/connect';
import { redirect } from 'next/navigation';
import { Store } from '../models/storeModel';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email : {
          label: "Email",
          type : "email"
        },
        password : {
          label : "Password",
          type : "password"
        }
      },
      authorize : async (credentials) => {
        const email = credentials.email;
        const password  = credentials.password;

        // CONNECT DB
        await connectDB();

        const user = await User.findOne({email}).select("+password");

        if (!user) throw new CredentialsSignin({cause:"Invalid Email or Password"});

        if (!user.password) 
          throw new CredentialsSignin({cause:"Invalid Email or Password"});

        const passMatch = await compare(password, user.password);

        if (!passMatch) 
          throw new CredentialsSignin({cause:"Invalid Email or Password"});

        return { 
          name: user.name,
          email: user.email,
          id: user._id
        }

      }
    }),
    
  ],
  pages: {
    signIn: "/login",
  },
  callbacks : {
    signIn : async ({user, account }) => {
      if (account?.provider === "google") {
        try {

          console.log(user);
          const {email, name, image, id} = user

          await connectDB();

          const alreadyUser = await User.findOne({email});

          console.log(alreadyUser);

          if (!alreadyUser){

            await User.create({
              name : name,
              email : email,
              phone: "0",
              password : "0",
              onBoardingCompleted : false,
              onBoardingStep: 0,
              googleId : id
            });

            await Store.create({
              ownerEmail: email,
              socialLinks: {}
      
          })
          }

          return true;
        } catch (error){
            throw new AuthError("Error while creating user")
        }
      }

      if (account?.provider === "credentials") return true;

      return false;
    }
  }
});