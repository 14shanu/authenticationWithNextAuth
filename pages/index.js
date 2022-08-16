import React from 'react'
import {signIn,signOut,useSession} from 'next-auth/client'

// import { useRouter } from 'next/dist/client/router'

export default function Home() {
  // const router = useRouter()
  const [session, loading] =useSession()
  return (<>
  
    
    {!session &&(
      <>
      
      Not Signed In <br/>
      <button onClick={signIn}>Sign In</button>
      </>
      )}
    
    
    {session &&(
      <>
      Signed is as{session.user.email} <br/>
      <button onClick={signOut} >Sign Out</button>
      </>
    )}

    </>
  )
}
