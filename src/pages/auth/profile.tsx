import { supabase } from '@/utils/supabaseClient';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react'



const Profile = () => {
  const { data: sessionNext } = useSession();
  const userEmail = supabase.auth.user()?.email


  return (
    <div>
      <Head>
        <title>Eco-Coffe - Profile</title>
      </Head>
      <div>
        <h1>profile page</h1>
      <h2>name: {sessionNext?.user?.name}</h2>
      <h2>Email: {userEmail}</h2>
      </div>
    </div>
  )
}



export default Profile;