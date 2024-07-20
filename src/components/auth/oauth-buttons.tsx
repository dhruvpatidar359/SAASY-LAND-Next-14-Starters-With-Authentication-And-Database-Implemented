"use client"

import * as React from "react"
import { signIn } from "next-auth/react"

import { DEFAULT_SIGNIN_REDIRECT } from "@/config/defaults"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function OAuthButtons(): JSX.Element {
  const { toast } = useToast()

  async function handleOAuthSignIn(
    provider: "google" | "github"
  ): Promise<void> {
    try {
      await signIn(provider, {
        callbackUrl: DEFAULT_SIGNIN_REDIRECT,
        
      })

      toast({
        title: "Success!",
        description: "You are now signed in",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      })

      console.error(error)
      throw new Error(`Error signing in with ${provider}`)
    }
  }

  return (
    <div className="">
      <Button
        aria-label="Sign in with Google"
        variant="outline"
        onClick={() => void handleOAuthSignIn("google")}
        className="w-full "
      >
        <Icons.google className="mr-2 size-4" />
        Google
      </Button>

    </div>
  )
}
