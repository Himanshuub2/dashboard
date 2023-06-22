'use client'
import React from "react"
import LeftDashboard from "../../components/LeftDashboard"
import RightDashboard from "../../components/RightDashboard"
import {useSession} from "next-auth/react"
import {RotatingLines} from "react-loader-spinner"
import {useState} from "react"
import { useMediaQuery } from 'react-responsive';


// import RightDashboard from "../../../src/components/RightDashboard"


const Dashboard = ()=>{
    const {data:session}  = useSession()
    const [isLoading,setIsLoading] =useState(false)
    const [showMenu,setShowMenu] =useState(false)
    const isMobile = useMediaQuery({maxWidth:600})

    setTimeout(()=>{
        setIsLoading(true)
    },1000)
    console.log(session);
    return(
        <>
        {
            // session && 
            isLoading?
        <div className="p-6 bg-gray-100 w-screen  h-fit flex flex-row  items-start" style={{position:isMobile?"relative":""}}>
           
            {
                showMenu || !isMobile ?
            <LeftDashboard/>:
            ""
            }
            {
                isMobile &&
            <div onClick={()=>setShowMenu(!showMenu)} style={{marginLeft:showMenu?"":"",position:isMobile?"":""}} 
            className=" mt-4 bg-black text-white p-1 space-y-[4px]">
                <div className="bg-white w-3 h-[1px]"></div>
                <div className="bg-white w-3 h-[1px]"></div>
                <div className="bg-white w-3 h-[1px]"></div>
                

            </div>
            }
           
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


