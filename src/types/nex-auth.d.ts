// NextJS
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        expires: Date;
        user: {
            access_token: string;
            refresh_token: string;
            user: IUser;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        access_token: string;
        refresh_token: string;
        user: IUser;
    }
}
