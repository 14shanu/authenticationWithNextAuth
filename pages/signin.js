// import React from 'react'
// import {providers,signIn,getSession,csrfToken} from 'next-auth'



// export default function SignIn({providers,csrfToken}) {
//     return (
//         <div>
//             <form method="post" action="/api/auth/signin/email">
//                 <label htmlFor="email">Email</label>
//                 <input name="email" type="text" />
//                 <label htmlFor="password">Password</label>
//                 <input name="password" type="text"></input>
//             </form>
//         </div>
//     )
// }

// SignIn.getInitialProps =async(context) =>{
//     const {req , res} =context
//     const session = await(getSession({req}))

//     if (session && res && session.accessToken){
//         res.writeHead(302,{
//             Location:"/"
//         })
//         res.end()
//         return
//     }
//     return{
//         session: undefined,
//         providers:await providers(context),
        
//     }
// }
