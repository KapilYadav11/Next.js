import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


import NextAuth from "next-auth";
import { log } from "console";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "e-mail",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "kapil@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                console.log(username);
                console.log(password);

                const user = {
                    name: "kapil",
                    id: "1",
                    username: "kapil@gmail.com",
                };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),

        GoogleProvider({
            clientId: "jfgu",
            clientSecret: "djhbshb",
        }),

        
        GitHubProvider({
            clientId: "hfj",
            clientSecret: "jhfwf"
        })



    ],
});

export const GET = handler;
export const POST = handler;
