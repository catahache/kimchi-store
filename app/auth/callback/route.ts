import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Get the URL and extract the code parameter
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")

  // Get the next URL to redirect to after authentication (if provided)
  const next = searchParams.get("next") ?? "/"

  if (code) {
    // Create a Supabase client for the server
    const supabase = createClient()

    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Handle different environments for proper redirection
      const forwardedHost = request.headers.get("x-forwarded-host")
      const isLocalEnv = process.env.NODE_ENV === "development"

      if (isLocalEnv) {
        // Local development environment
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        // Production with a load balancer
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        // Standard production environment
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // If there's an error or no code, redirect to an error page
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}

