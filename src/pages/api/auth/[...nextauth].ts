import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

interface ProcessEnv {
  [key: string]: string | undefined
}

const ClientId: string = process.env.GOOGLE_CLIENT_ID || '';
const GoogleClient: string = process.env.GOOGLE_CLIENT_SECRET || '';

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: ClientId,
        clientSecret: GoogleClient,
      })
    ],
    secret: 'IamVeryHandsome',
  });