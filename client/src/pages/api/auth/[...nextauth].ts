import { auth } from '@/firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        try {
          if (!credentials) {
            return null;
          }

          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials?.email as string,
            credentials?.password as string,
          );
          const user = userCredential.user;
          if (user) {
            return {
              id: user.uid,
              email: user.email,
              name: user.displayName || "",
            };
          } else {
            return null;
          }
        } catch (error: any) {
          console.error(error.message);
          if (error.code === 'auth/wrong-password') {
            throw new Error('잘못된 비밀번호입니다.');
          }
          throw new Error('로그인 중 문제가 발생했습니다.');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
