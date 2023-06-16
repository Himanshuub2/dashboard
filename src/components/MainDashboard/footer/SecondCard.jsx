

const SecondCard = ()=>{
    return(
       <>
            <div className="flex flex-row justify-between items-center px-6 py-4">
                <h1 className="text-[1.3rem] font-semibold ">Today's Schedule</h1>
                <h1 className="text-gray-400 text-[12px] ">See All
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
                    </svg>
                </h1>   


            </div>
        
                {
                    meetingDetails.map(item=>(
                        <>
                            <div className="flex flex-row space-x-3 px-6 py-2">
                        <div className="">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                    <p className="font-medium text-gray-700">{item.subject}</p>
                    <p  className="text-gray-400 text-[12px]">{item.time}</p>
                    <p className="text-gray-400 text-[12px]">{item.venue}</p>
                </div>
                </div>
                </>
                    ))
                }
                

           
            </>
    )
}

export default SecondCard;


const meetingDetails = [
    {
        subject:"Meeting with Supplier from Kuta Bali",
        time:"14:00-15:00",
        venue:"at Sunset Road,Kuta,Bali",
        icon:  <svg width="5" height="66" viewBox="0 0 5 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2.5" y1="1.09278e-07" x2="2.5" y2="66" stroke="#9BDD7C" stroke-width="5"/>
               </svg>
    },{
        subject:"Check Operation at Giga Factory 1",
        time:"18:00-20:00",
        venue:"at Central Jakarta",
        icon:  <svg width="5" height="66" viewBox="0 0 5 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="1.09278e-07" x2="2.5" y2="66" stroke="#6972C4" stroke-width="5"/>
                </svg>
        
    }
]