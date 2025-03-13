import React from "react";
import { UserButton,ClerkProvider } from "@clerk/nextjs";
const homePage = ()=>{
return(
    <div>hello from dashboard
        <UserButton/>
        <ClerkProvider afterSignOutUrl="/"/>
    </div>
    )
}

export default homePage 