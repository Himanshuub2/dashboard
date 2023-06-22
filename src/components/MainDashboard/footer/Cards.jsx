
import FirstCard from "./FirstCard"
import SecondCard from "./SecondCard"


const Cards = ()=>{
    return(
        <div className="flex laptop:flex-row mobile:flex-col h-flex-grow laptop:space-x-8 mobile:gap-y-10">
         <div className="laptop:w-[45%] mobile:w-[96%] mobile:p-0 flex flex-col  h-full bg-white laptop:p-2 rounded-[1.6rem]">
            <FirstCard/>
        </div>
        <div className="laptop:w-[45%] mobile:w-[96%] mobile:p-0 flex flex-col  h-full bg-white laptop:p-2 rounded-[1.6rem]">
            <SecondCard/>
        </div>
        </div>
    )
}

export default Cards


