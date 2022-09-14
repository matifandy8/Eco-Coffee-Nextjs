import { withPageAuth } from '@supabase/auth-helpers-nextjs'

export default function Account({ user }:any) {
  return <div>Hello {user.name}</div>
}

export const getServerSideProps = withPageAuth({ redirectTo: '/auth/login' })