import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#161616] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white">Authentication Error</h1>
          <p className="text-gray-400">
            There was a problem with the authentication process. This could be due to an expired or invalid link.
          </p>
        </div>

        <div className="pt-4">
          <Button
            asChild
            className="w-full bg-[#2b725e] hover:bg-[#235e4c] text-white py-6 text-lg font-medium rounded-lg h-[60px]"
          >
            <Link href="/login">Return to Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

