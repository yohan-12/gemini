"use client"
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "./ui/button"
import SupabaseUIClient from "@/lib/supabase/client";
const OAuthForm = () => {
    const supabase = SupabaseUIClient()
    const loginWithGithub = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
    }
 
  return (
    <Button onClick={loginWithGithub}>Login With Github</Button>
  )
}

export default OAuthForm