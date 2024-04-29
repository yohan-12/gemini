import React from "react";
import { Button } from "@/components/ui/button";
import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/lib/actions";
const LogoutBtn = () => {

  return (
    <form action={logout}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
};

export default LogoutBtn;
