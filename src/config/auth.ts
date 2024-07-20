import type { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

  

export default {
  providers: [
    GoogleProvider({
      clientId: "60930318154-vibh604mfav8g1kj1s4427pavs27nbin.apps.googleusercontent.com",
      clientSecret: "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",
      allowDangerousEmailAccountLinking: true,
    }),
   
  ],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig
