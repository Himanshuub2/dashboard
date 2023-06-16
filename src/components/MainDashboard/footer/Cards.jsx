
import FirstCard from "./FirstCard"
import SecondCard from "./SecondCard"


const Cards = ()=>{
    return(
        <div className="flex flex-row h-64 space-x-8 ">
         <div className="w-[45%] flex flex-col  h-full bg-white p-2 rounded-[1.6rem]">
            <FirstCard/>
        </div>
        <div className="w-[45%] flex flex-col  h-full bg-white p-2 rounded-[1.6rem]">
            <SecondCard/>
        </div>
        </div>
    )
}

export default Cards


