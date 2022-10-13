import { getCookie } from 'cookies-next';
import Head from 'next/head';
import React from 'react'



const Profile = () => {
  return (
    <div>
      <Head>
        <title>Eco-Coffe - Profile</title>
      </Head>
      <div>
        <h1>Profile</h1>
        <p>You haven't placed any orders yet.</p>
      </div>
    </div>
  )
}

export function getServerSideProps({ req, res }) {
  const tokendata = getCookie('autenticated', { req, res });
  const sessionGoogle = getCookie('next-auth.session-token', { req, res });



  if (!tokendata && !sessionGoogle) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { token: tokendata || "" } };
}



export default Profile;