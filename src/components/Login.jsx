'use client'
import {signIn} from "next-auth/react";

const Login = ()=>{
    return(
        <div className="w-[35%] h-[30% ] bg-white p-8 rounded-[20px] flex flex-col space-y-4">
              
            <p>Email address</p>
            <input className="bg-gray-200 rounded-md p-1.5"></input>
            <p>Password</p>
            <input className="bg-gray-200 rounded-md p-1.5" type="password"></input>
            <p className="text-blue-500"><a>Forgot Password?</a></p>
            <button className="bg-black text-center text-white p-2 rounded-lg font-medium" onClick={()=>signIn("google")}>Sign In</button>
        </div>
    )
}
export default Login