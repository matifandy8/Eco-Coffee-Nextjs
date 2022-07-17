import { useSession, signIn, signOut } from "next-auth/react";


const Register: React.FC = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      Register
      <div>
          Click to sign into your user account <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
    </div>
  )
}

export default  Register