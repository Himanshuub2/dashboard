import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "42522660154-nlp32eco44d66elq7tdoqru9n03lm1no.apps.googleusercontent.com",
      clientSecret: "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",
    
    }),
    
    // ...add more providers here
  ],
  
}

const handler =  NextAuth(authOptions)

export {handler as GET ,handler as POST}