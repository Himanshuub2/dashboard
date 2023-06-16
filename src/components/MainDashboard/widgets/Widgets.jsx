import {widgetData} from "./widgetData"


const Widget = ()=>{
    return(
        <div className="w-full flex flex-row justify-between ">
           
           { widgetData.map(items=>(
            <>
                <div className="w-60 h-28 flex flex-row rounded-[1.6rem]" style={{background:items.color}}>
                <div className="w-[80%] h-full flex flex-row">
                    <div className="self-end p-6">
                    <h4 >{items.title}</h4>
                    <h3 className="font-bold text-2xl" >{items.Count}</h3>
                    </div>
                </div>
                <div className="w-[20%] h-full align-top px-[-8px] py-5 ">
                    {items.Icon}

                </div>
            </div>
            </>
           ))
            
          
           }



        </div>
    )
}

export default Widget