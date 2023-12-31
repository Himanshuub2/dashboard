import type { Provider } from "next-auth/providers"

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


 const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
    
    GoogleProvider({
      clientId:process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
    
    }) as Provider,
    
    // ...add more providers here
  ],
  secret:"abcfd121423"
}

const handler =  NextAuth(authOptions)

export {handler as GET ,handler as POST}