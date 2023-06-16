'use client'
import React from "react"
import LeftDashboard from "../../components/LeftDashboard"
import RightDashboard from "../../components/RightDashboard"
import {useSession} from "next-auth/react"
import {RotatingLines} from "react-loader-spinner"
import {useState} from "react"



// import RightDashboard from "../../../src/components/RightDashboard"


const Dashboard = ()=>{
    const {data:session}  = useSession()
    const [isLoading,setIsLoading] =useState(false)
    setTimeout(()=>{
        setIsLoading(true)
    },1000)
    console.log(session);
    return(
        <>
        {
            session && isLoading?
        <div className="p-6 bg-gray-100 w-screen  h-fit flex flex-row">
            <LeftDashboard/>
            <RightDashboard/>
            
        </div>
        :
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <RotatingLines
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
      </div>
    
        }
       </>
    )
    
 
}

export default Dashboard


