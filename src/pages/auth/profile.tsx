import { useAuth } from '@/context/auth';
import { supabase } from '@/utils/supabaseClient';
import Head from 'next/head';
import React from 'react'



const Profile: React.FC = ({ data }:any) => {
  console.log(data)

  return (
    <div>
      <Head>
        <title>Eco-Coffe - Login</title>
      </Head>
      <h1>profile page</h1>
    </div>
  )
}
export async function getServerSideProps() {
  const data = supabase.auth.session();

  if (data === null) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login'
      }

    }
  } else {
    return {
      props: { data }
    }
  }
}

  export default Profile;