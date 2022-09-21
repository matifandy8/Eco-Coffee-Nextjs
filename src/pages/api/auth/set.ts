import { supabase } from "@/utils/supabaseClient";

export default async function handler(req:any, res:any) {
    await supabase.auth.api.setAuthCookie(req, res)

}