import Header from "./MainDashboard/header/Header"
import Activity from "./MainDashboard/activity/Activity"
import Widgets from "./MainDashboard/widgets/Widgets"
import Cards from "./MainDashboard/footer/Cards"
const RightDashboard = ()=>{
    return(
        <div className="flex laptop:py-6 laptop:px-12 mobile:py-4 mobile:px-2 flex-col  mobile:w-[100%] laptop:w-[82%] h-fit space-y-11">
            <Header/>
            <Widgets/>
            <Activity/>
            <Cards/>
        </div>
    )
    
}

export default RightDashboard