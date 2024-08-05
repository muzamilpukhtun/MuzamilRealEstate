import { RECENT_SALES } from "../constants"
import { CARD } from "./Card"

const RecentSales = () => {
  return (
        <section className="w-screen pb-8">
        <div className=" border-t border-1 border-[#303030] mx-20"></div>
        <div className="flex flex-col justify-center items-center">
        <h2 className="mb-8 text-3xl lg:text-4xl p-8 font-thin">RECENT Sales</h2>
    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:px-24 gap-8 place-content-center">
        {RECENT_SALES.map((project,index)=>(
            <CARD key={index} project={project}/>
        ))}
        </div>
    
        </div>
        </section>
      )
    }
    
    
    
    export default RecentSales