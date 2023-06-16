'use client'
import React from "react"
import "./globals.css"
import Login from "../components/Login"
import {signIn} from "next-auth/react"



// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="46px" height="46px" viewBox="0 0 46 46" style="width: 48px; height: 48px; display: block;"><defs><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix><feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0" in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="shadowMatrixOuter2"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect></defs><g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="9-PATCH" transform="translate(-608.000000, -160.000000)"></g><g id="btn_google_light_normal" transform="translate(-1.000000, -1.000000)"><g id="button" transform="translate(4.000000, 4.000000)" filter="url(#filter-1)"><g id="button-bg"><use fill="#FFFFFF" fill-rule="evenodd"></use><use fill="none"></use><use fill="none"></use><use fill="none"></use></g></g><g id="logo_googleg_48dp" transform="translate(15.000000, 15.000000)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path><path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path></g><g id="handles_square"></g></g></g></svg>

const Home = ()=>{
  
    return(
     
        <div className="w-screen h-screen flex flex-row ">
          <div className="w-[30%] bg-black h-screen flex justify-center items-center">
            <h1 className="text-6xl text-white font-medium font-headingText">Board.</h1>
          </div>
          {/* Right Side */}
          <div className="w-[70%] h-full bg-gray-200 flex flex-col items-center justify-center space-y-8">
            <Heading/>
            <div className="flex flex-row space-x-4">
            <button className="w-44 h-8 rounded-[1rem] bg-white text-[12px]"  onClick={()=>signIn("google",{callbackUrl:"http://localhost:3000/dashboard"})}>
              <svg className="inline" version="1.1" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 46 46" ><defs><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix><feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0" in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="shadowMatrixOuter2"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect></defs><g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="9-PATCH" transform="translate(-608.000000, -160.000000)"></g><g id="btn_google_light_normal" transform="translate(-1.000000, -1.000000)"><g id="button" transform="translate(4.000000, 4.000000)" filter="url(#filter-1)"><g id="button-bg"><use fill="#FFFFFF" fill-rule="evenodd"></use><use fill="none"></use><use fill="none"></use><use fill="none"></use></g></g><g id="logo_googleg_48dp" transform="translate(15.000000, 15.000000)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path><path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path></g><g id="handles_square"></g></g></g></svg>
              Sign in with Google
            </button>
            <button className="w-44 h-8 rounded-[1rem] bg-white px-2">
            <svg className="inline" width="15" height="17" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952V1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181V4.0181Z" fill="#999999"/>
            </svg>
            <span className="text-[12px] inline">Sign in with Apple</span>

            </button>
            </div>

            <Login/>

            <p className="text-gray-500">Dont have an account? <a className = "text-blue-500 cursor-pointer">Register here</a></p>
          
          </div>
        </div>
     
    )
}

export default Home


const Heading= ()=>{
  return(
    <div className = "w-[30%] flex flex-col flex-start gap-y-1 ml-[-50px]">
    <h1 className="text-4xl font-bold  align-start ">Sign In</h1>
    <p>Sign in to your account</p>
  </div>
  )
}
