import { RECENT_LISTING } from "../constants"
import { CARD } from "./Card"

const RecentListing = () => {
  return (
    <section className="w-screen pb-8">
    <div className="flex flex-col justify-center items-center">
    <h2 className="mb-8 text-3xl lg:text-4xl p-8 font-thin">RECENT LISTING</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:px-24 gap-8 place-content-center">
    {RECENT_LISTING.map((project,index)=>(
        <CARD key={index} project={project}/>
    ))}
    </div>

    </div>
    </section>
  )
}



export default RecentListing