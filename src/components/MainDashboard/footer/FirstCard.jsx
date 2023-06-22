

const FirstCard = ()=>{
    return(
     <>
                <div className="flex flex-row justify-between items-center laptop:px-6 laptop:py-4 mobile:px-3 mobile:py-2">
                    <h2 className=" laptop:text-[1.3rem] mobile:text-[14px] font-semibold ">Top Products</h2>
                    <SelectMonth/>
                </div>
                <div className="flex flex-row justify-around h-full items-center">
                <Pie/>
                <List/>

                </div>
    </>
    )
}

export default FirstCard;



const SelectMonth = ()=>{
    return(
        <select className="text-gray-400 laptop:text-[12px] mobile:text-[10px]">
        <option className="text-gray-400">May-June 2023</option>
        <option className="text-gray-400">Jan-Feb 2023</option>
        <option className="text-gray-400">Mar-Apr 2023</option>
        <option className="text-gray-400">Apr-May 2023</option>
    </select>
    )
}

const Pie = ()=>{
    return(
        <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_0_281"  maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="134">
        <circle cx="67" cy="67" r="67" transform="rotate(180 67 67)" fill="#C4C4C4"/>
        </mask>
        <g mask="url(#mask0_0_281)">
        <rect x="140.634" y="139.307" width="145.941" height="145.941" transform="rotate(180 140.634 139.307)" fill="#98D89E"/>
        <path d="M81.5941 -3.31683L67.6634 66.3366L140.634 37.6941V-6.63367L81.5941 -3.31683Z" fill="#EE8484"/>
        <path d="M140.634 139.307V37.8119L68.3267 65.6733V139.307H140.634Z" fill="#F7DC7D"/>
        </g>
    </svg>
    )
}

const listData = [
    {
        title:"Basic Tees",
        legend:<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.5" cy="5.5" r="5.5" fill="#98D89E"/>
        </svg>,
        percent:"50%"
        
    },
    {
        title:"Custom Short Pants",
        legend:<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.5" cy="5.5" r="5.5" fill="#F6DC7D"/>
        </svg>
        ,
        percent:"31%"
        
    },
    {
        title:"Super Hoodies",
        legend:<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.5" cy="5.5" r="5.5" fill="#EE8484"/>
        </svg>
        ,
        percent:"14%"
        
    }
]
const List = ()=>{
    return(
        <div className="">
            {
                listData.map(item=>(
                    <>
                    <div className="flex flex-row items-center mobile:text-[12px]">   
                    {item.legend}
                    <span className="font-medium ml-3 mobile:text-[10px]">{item.title}</span>
                    </div>
                    
                   <span className="text-[12px] text-gray-500 block mb-4 ml-6" >{item.percent}</span>
                   </>
                ))  
            }
         
           

        </div>
    )
}