import whyAbout from '../assets/whychooseus.png'
import { WHY_CHOOSE_US } from '../constants'
const WhyUs = () => {
  return (
    <section className="w-screen bg-[#303030] text-white">
    <div className="flex flex-wrap justify-center items-center">
    
    <div className="w-full md:w-1/2">
    <img src={whyAbout}/>
    </div>
    
    
    <div className="w-full md:w-1/2 flex flex-col items-center mt-8">
    <h2 className="text-4xl lg:text-5xl font-thin">WHY CHOOSE US</h2>
    <div className='border-b border-1 border-white w-[36px] mt-4'></div>
    <div  className='grid grid-cols-2 gap-8 p-10'>
    {WHY_CHOOSE_US.map((item,index)=>(
        <p className='tracking-tighter text-xl font-thin' key={index}>{item.content}</p>
    ))}
    </div>
    </div>


    </div>
    
    </section>
  )
}

export default WhyUs