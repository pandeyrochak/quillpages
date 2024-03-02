import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './connect';
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
// @ts-ignore
export const getAuthSession = () => getServerSession(authOptions);
