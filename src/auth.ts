import { linkOAuthAccount } from "@/actions/auth"
import { getUserById } from "@/actions/user"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import { env } from "@/env.mjs"
import authConfig from "@/config/auth"
import { prisma } from "@/config/db"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    verifyRequest: "/signin/magic-link-signin",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 daysd
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async linkAccount({ user }) {
      if (user.id) await linkOAuthAccount({ userId: user.id })
    },
  },
 
  
  ...authConfig,
})
