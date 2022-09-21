import { supabase } from "@/utils/supabaseClient"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export function AuthGuard({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState<any>(supabase.auth.user() || undefined)
    const router = useRouter()


    useEffect(() => {
        checkUser();
    }, []);


    async function checkUser() {
        const userData = await supabase.auth.user();
        setUser(user);
    }

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [user])

    // if auth initialized with a valid user show protected page
    if (user) {
        return <>{children}</>
    }

    /* otherwise don't return anything, will do a redirect from useEffect */
    return null
}