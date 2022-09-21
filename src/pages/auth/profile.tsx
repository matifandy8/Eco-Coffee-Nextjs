import Head from 'next/head';
import React, { useEffect } from 'react'



const Profile = () => {

  return (
    <div>
      <Head>
        <title>Eco-Coffe - Login</title>
      </Head>
      <h1>profile page</h1>
    </div>
  )
}


Profile.requireAuth = true


export default Profile;