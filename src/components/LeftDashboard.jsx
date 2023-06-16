import {AiOutlinePieChart,AiOutlineTags,AiOutlineCalendar,AiOutlineSetting} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"


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
    
    
    return(
        <div className="md:w-[18%] sm:w-[25%] h-[56rem]  bg-black p-8 rounded-[30px] space-y-14">
            <h1 className="text-5xl text-white font-semibold ">Board.</h1>
            <li className="text-white space-y-6 " style={{listStyle:"none"}}>
            {
                boardElements.map((item,i)=>(
                    <ul className="flex flex-row gap-6 cursor-pointer" key={item.title}>
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