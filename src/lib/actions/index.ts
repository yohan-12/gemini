"use server"
import { redirect } from "next/navigation";
import createSupabaseServerClient from "../supabase/server"
export default async function readUserSession(){
    const supabase = await createSupabaseServerClient();
    return supabase.auth.getSession()
}
export async function logout(){
        const supabase = await createSupabaseServerClient();
        const { error } = await supabase.auth.signOut();
        if (!error) {
          redirect("/");
        } else {
          console.error("Logout failed", error);
        }
}