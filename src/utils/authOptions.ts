// NextJS
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Services
import { signIn } from "@services/auth";

export const authOptions: NextAuthOptions = {
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token as never;
            return session;
        },
    },
    pages: {
        signIn: "/login",
        error: "/",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return;

                const { email, password } = credentials;

                const res = await signIn({ email, password });

                if (res?.status !== 200) throw new Error("Invalid credentials");

                return res.data;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};
