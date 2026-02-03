import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "email",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const username = credentials?.username;
        const password = credentials?.password;
        const user = {
          id: "1",
          name: "golu",
          username: "golu@gmail.com",
        };

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
    }),
    GitHubProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),
  ],
});

export { handler as GET, handler as POST };
