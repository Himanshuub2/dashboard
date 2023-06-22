import {AiOutlinePieChart,AiOutlineTags,AiOutlineCalendar,AiOutlineSetting} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import { useMediaQuery } from "react-responsive"


const boardElements = [
    {
        "icon":<AiOutlinePieChart size="1.3rem"/>,
        "title":"Dashboard"
    },{
        "icon":<AiOutlineTags  size="1.3rem"/>,
        "title":"Transactions"
    },{
        "icon":<AiOutlineCalendar size="1.3rem"/>,
        "title":"Schedules"
    },{
        "icon":<BiUserCircle size="1.3rem"/>,
        "title":"Users"
    },{
        "icon":<AiOutlineSetting size="1.3rem"/>,
        "title":"Settings"
    }
]

const LeftDashboard = ()=>{
    
    const isMobile = useMediaQuery({maxWidth:600})
    return(
        <div className="mobile:w-[55%] laptop:w-[22%] h-[56rem]  bg-black mobile:p-4 laptop:p-8 rounded-[30px] space-y-14" style={{position:isMobile?"absolute":"",marginLeft:isMobile?"25px":""}}>
            <h1 className="mobile:text-2xl laptop:text-5xl text-white font-semibold ">Board.</h1>
            <li className="text-white space-y-6 " style={{listStyle:"none"}}>
            {
                boardElements.map((item,i)=>(
                    <ul className="mobile:text-[14px] flex flex-row mobile:gap-3 laptop:gap-6 cursor-pointer" key={item.title}>
                        {item.icon}
                        
                            {
                            i===0?
                        <span className="font-bold" >{item.title}</span>
                        :
                        <span >{item.title}</span>
                            }
                        
                    

                    </ul>
                    

                ))
            }
              
            </li>
            <div className="h-[28rem] text-white flex flex-col justify-end space-y-3 font-thin">
                <p>Help</p>
                <p>Contact Us</p>

            </div>
          
        </div>
    )
}

export default LeftDashboard