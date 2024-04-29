import LogoutBtn from "@/components/LogoutBtn";
import OAuthForm from "@/components/OAuthForm";
import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";
export default async function Home() {

  const { data } = await readUserSession()
  const isAuth = !!data.session
  // const {data} = await readUserSession()
  //! double negation 1st ! turns to false if data is truthy (non-null/undefine) 2nd ! changes false -> true thus isAuth will be true if we have any sort of data and false if its undefine / null etc

  // const isAuth = !!data

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            {/* <OAuthForm/> */}
            {isAuth ? <LogoutBtn /> : <OAuthForm />}
          </div>

          <div className="flex mt-2">
            {isAuth && (
              <Link href={'/gemini'} className={buttonVariants({ variant: "default" })}>
                Chat with Gemini
              </Link>
            )}
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join millions of student, researchers and professionals to instanly
            answer questions and understand AI{" "}
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <h1>File Upload</h1>
            ) : (
              <Link href="/sign-up">
                <Button>
                  Login to get started
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
