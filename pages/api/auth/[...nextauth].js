import NextAuth from "next-auth";
import Providers from "next-auth/providers";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
//       Providers.GitHub({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET
//       }),
//       // ...add more providers here
//     ],
  
//     // A database is optional, but required to persist accounts in a database
//     // database: process.env.DATABASE_URL,
//   })

Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
   
   
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // credentials: {
    //   username: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
    //   password: {  label: "Password", type: "password" }
    // },
    authorize: async (credentials ) => {
        const user = await axios.post('',{
            user:{
                password:credentials.password,
                email:credentials.email
            }
        },
        {
            headers:{
                accept:'*/*',
                'Content-Type': 'application/json'
            }
        }
        )
        if (user) {
            return user
          } else {
            return null
          }
        
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address) 
    //   const res = await fetch("/your/endpoint", {
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: { "Content-Type": "application/json" }
    //   })
    //   const user = await res.json()
      
    //   // If no error and we have user data, return it
    //   if (res.ok && user) {
    //     return user
    //   }
    //   // Return null if user data could not be retrieved
    //   return null
    }
  })
],
callbacks:{
    // Getting the JWT token from API response
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token
    }

    return token
  },

  async session(session, token) {
    session.accessToken = token.accessToken
    return session
  }
},
// pages:{
// signIn:"/signin"
// },
// session:{
//     jwt:true
// }
})
