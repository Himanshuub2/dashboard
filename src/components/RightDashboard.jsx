import Header from "./MainDashboard/header/Header"
import Activity from "./MainDashboard/activity/Activity"
import Widgets from "./MainDashboard/widgets/Widgets"
import Cards from "./MainDashboard/footer/Cards"
const RightDashboard = ()=>{
    return(
        <div className="flex py-6 px-12 flex-col w-[82%] h-fit space-y-11">
            <Header/>
            <Widgets/>
            <Activity/>
            <Cards/>
        </div>
    )
    
}

export default RightDashboard